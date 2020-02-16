/** @typedef {import('@babel/core').types.File} File */

const { expect } = require('chai');
const { parse } = require('@babel/core');
const {
  isFile, isExpressionStatement, isTaggedTemplateExpression,
  variableDeclarator, variableDeclaration, identifier,
} = require('@babel/core').types;
const generate = require('@babel/generator').default;

const { transformQuasisWithDynamicTags } = require('../src/transformQuasisWithDynamicTags');

describe('transformQuasisWithDynamicTags', () => {
  const testCases = [
    {
      id:'single elements',
      input: 'html`<my-element></my-element>`',
      output: ['const template = t => [`<${t("my-element")}></${t("my-element")}>`];']
    },
    {
      id:'non custom elements',
      input: 'html`<div></div>`',
      output: null
    },
    {
      id:'nested elements',
      input: 'html`<my-element><my-element-2></my-element-2></my-element>`',
      output: ['const template = t => [`<${t("my-element")}><${t("my-element-2")}></${t("my-element-2")}></${t("my-element")}>`];']
    },
    // {
    //   id:'sibling elements',
    //   input: 'html`<my-element></my-element><my-element-2></my-element-2>`',
    //   output: ['t => `<${t["my-element"]}></${t["my-element"]}><${t["my-element-2"]}></${t["my-element-2"]}>`']
    // },
    // {
    //   id:'regular and custom elements',
    //   input: 'html`<my-element><div></div></my-element>`',
    //   output: ['t => `<${t["my-element"]}><div></div></${t["my-element"]}>`']
    // },
    // {
    //   id:'attributes',
    //   input: 'html`<my-element foo="bar"></my-element>`',
    //   output: ['t => `<${t["my-element"]} foo="bar"></${t["my-element"]}>`']
    // },
    // {
    //   id:'text content',
    //   input: 'html`<my-element>Foo bar </my-element>`',
    //   output: ['t => `<${t["my-element"]}>Foo bar </${t["my-element"]}>`']
    // },
    // {
    //   id:'text expression',
    //   input: 'html`<my-element>${this.foo}</my-element>`',
    //   output: [
    //     't => `<${t["my-element"]}>`',
    //     't => `</${t["my-element"]}>`'
    //   ]
    // },
    // {
    //   id:'attribute expression',
    //   input: 'html`<my-element foo=${this.foo}></my-element>`',
    //   output: [
    //     't => `<${t["my-element"]} foo=`',
    //     't => `></${t["my-element"]}>`'
    //   ]
    // },
    // {
    //   id:'mixed syntax',
    //   input: 'html`<my-element foo="bar" bar=${this.bar}>Foo<my-element-2>${"hello world"}</my-element-2></my-element><my-element-2></my-element-2>`',
    //   output: [
    //     't => `<${t["my-element"]} foo="bar" bar=`',
    //     't => `>Foo<${t["my-element-2"]}>`',
    //     't => `</${t["my-element-2"]}></${t["my-element"]}><${t["my-element-2"]}></${t["my-element-2"]}>`'
    //   ]
    // },
  ];

  testCases.forEach((testCase) => {
    it(`test case: ${testCase.id}`, () => {
      const file = parse(testCase.input);
      if (!isFile(file))  throw new Error('Not a file');

      const [expression] = file.program.body;
      if (!isExpressionStatement(expression)) throw new Error('Not a template');
      if (!isTaggedTemplateExpression(expression.expression)) throw new Error('Not a template');

      const output = transformQuasisWithDynamicTags('template', expression.expression.quasi.quasis);
      if (output && testCase.output) {
        expect(generate(output).code).to.eql(testCase.output.join('\n'));
      } else {
        expect(output).to.equal(testCase.output);
      }
    });
  });
});