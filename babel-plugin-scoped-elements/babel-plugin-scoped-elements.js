/** @typedef {import('@babel/core').PluginItem} PluginItem */
/** @typedef {import('@babel/core').PluginObj} PluginObj */
/** @typedef {import('@babel/core').types.TaggedTemplateExpression} TaggedTemplateExpression */
/** @typedef {import('@babel/core').types.TemplateElement} TemplateElement */
/** @typedef {import('@babel/core').types.Program} Program */

const {
  isIdentifier, identifier, arrayExpression,
  variableDeclaration, variableDeclarator,
  callExpression, assignmentExpression, memberExpression,
  booleanLiteral, expressionStatement,
} = require('@babel/core').types;
const { transformQuasisWithDynamicTags } = require('./src/transformQuasisWithDynamicTags');

/** @type {WeakMap<Program, number>} */
const counters = new WeakMap();

/** @param {Program} program */
function nextName(program) {
  let i = counters.get(program) || 0;
  i += 1;
  counters.set(program, i);
  return `__scopedTemplateStrings${i}__`;
}

function babelPluginScopedElements() {
  /**
   * @type {PluginObj}
   */
  const plugin = {
    visitor: {
      TaggedTemplateExpression(path) {
        const { node } = path;
        if (!isIdentifier(node.tag)) {
          return;
        }

        // TODO: check lit-html import?
        if (node.tag.name !== 'html') {
          return;
        }

        /** @type {Program} */
        const program = path.hub.file.ast.program;
        const { body } = program;

        const varName = nextName(program);
        const templateStrings = transformQuasisWithDynamicTags(varName, node.quasi.quasis);

        const stringsId = identifier(varName)
        const compiledMarker = expressionStatement(assignmentExpression('=', memberExpression(stringsId, identifier('__compiled__')), booleanLiteral(true)))

        body.unshift(compiledMarker);
        body.unshift(templateStrings);
        const templateAsFunction = callExpression(identifier(node.tag.name), [stringsId, ...node.quasi.expressions]);
        path.replaceWith(templateAsFunction);
      }
    }
  };
  return plugin;
}

module.exports = babelPluginScopedElements;