const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const merge = require('deepmerge');

function createConfig(name) {
  return {
    input: 'src/shack-app.js',
    output: {
      dir: `dist/${name}`,
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      // resolve bare import specifiers
      resolve(),
      terser(),
    ],
  }
}

const mixinPath = require.resolve('./src/scoped-elements/ScopedElementsMixin.js');

module.exports = [
  merge(
    createConfig('lit-element'),
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

  createConfig('mixin'),

  merge(
    createConfig('mixin-built'),
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
