const { expect } = require('chai');
const { transformAsync } = require('@babel/core');

/**
 * @param {string} code
 * @returns {Promise<string>}
 */
async function transform(code) {
  /** @type {import('@babel/core').TransformOptions} */
  const config = {
    caller: {
      name: 'babel-plugin-scoped-elements',
      supportsStaticESM: true,
    },
    plugins: [
      require.resolve('../babel-plugin-scoped-elements.js'),
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      require.resolve('@babel/plugin-syntax-import-meta'),
    ],
    sourceType: 'module',
    sourceMaps: false,
  };

  const result = await transformAsync(code, {
    filename: '/foo.js',
    ...config,
  });

  if (!result || !result.code) {
    throw new Error();
  }

  return result.code;
}

describe.only('transform', () => {
  const testCases = [
    {
      id:'no expressions',
      input: 'html`<my-element></my-element>`',
      output: [
        //
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]}></${t["my-element"]}>`];',
        'html(__scopedTemplateStrings1__);',
      ]
    },
    {
      id:'text expression',
      input: 'html`<my-element>${this.foo}</my-element>`',
      output: [
        //
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]}>`, t => `</${t["my-element"]}>`];',
        'html(__scopedTemplateStrings1__, this.foo);'
      ]
    },
    {
      id:'attribute expression',
      input: 'html`<my-element foo=${this.foo}></my-element>`',
      output: [
        //
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]} foo=`, t => `></${t["my-element"]}>`];',
        'html(__scopedTemplateStrings1__, this.foo);'
      ]
    },
    {
      id:'multiple expressions',
      input: 'html`<my-element foo=${this.foo}>${this.bar}</my-element>${"test"}lorem ipsum`',
      output: [
        //
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]} foo=`, ">", t => `</${t["my-element"]}>`, "lorem ipsum"];',
        'html(__scopedTemplateStrings1__, this.foo, this.bar, "test");'
      ]
    },
    {
      id:'sibling templates',
      input: 'html`<my-element></my-element>`\nhtml`<my-element-2></my-element-2>`',
      output: [
        //
        'const __scopedTemplateStrings2__ = [t => `<${t["my-element-2"]}></${t["my-element-2"]}>`];',
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]}></${t["my-element"]}>`];',
        'html(__scopedTemplateStrings1__);',
        'html(__scopedTemplateStrings2__);'
      ]
    },
    {
      id:'nested templates',
      input: 'html`<my-element>${html`<my-element-2></my-element-2>`}</my-element>`',
      output: [
        //
        'const __scopedTemplateStrings2__ = [t => `<${t["my-element-2"]}></${t["my-element-2"]}>`];',
        'const __scopedTemplateStrings1__ = [t => `<${t["my-element"]}>`, t => `</${t["my-element"]}>`];',
        'html(__scopedTemplateStrings1__, html(__scopedTemplateStrings2__));'
      ]
    },
  ];


  testCases.forEach((testCase) => {
    it(`test case: ${testCase.id}`, async () => {
      const output = await transform(testCase.input);
      const expected = testCase.output.join('\n');
      expect(output).to.equal(expected)
    });
  });
});