const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const merge = require('deepmerge');

const mixinPath = require.resolve('./src/scoped-elements/ScopedElementsMixin.js');

function createConfig(app, name) {
  return {
    input: `src/${app}/shack-app.js`,
    output: {
      dir: `dist/${app}/${name}`,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      // resolve bare import specifiers
      resolve(),
      terser(),
    ],
  }
}

function createConfigs(app) {
  return [
    merge(
      createConfig(app, 'lit-element'),
      {
        plugins: [
          {
            name: 'noop-mixin',
            load(id) {
              if (id === mixinPath) {
                // Make ScopedElementsMixin do nothing for the lit-element test
                return 'export const ScopedElementsMixin = base => base;';
              }
            }
          }
        ]
      }
    ),

    createConfig(app, 'mixin'),

    merge(
      createConfig(app, 'mixin-built'),
      {
        plugins: [
          babel({
            plugins: [
              require.resolve("./babel-plugin-scoped-elements/babel-plugin-scoped-elements.js"),
              require.resolve("@babel/plugin-syntax-dynamic-import"),
              require.resolve("@babel/plugin-syntax-import-meta")
            ]
          })
        ]
    }
    )
  ];
}

module.exports = [
  ...createConfigs('only-templates'),
  ...createConfigs('real-world-app'),
];
