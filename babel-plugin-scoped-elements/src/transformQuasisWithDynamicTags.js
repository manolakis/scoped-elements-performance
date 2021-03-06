/** @typedef {import('@babel/core').types.Expression} Expression */
/** @typedef {import('@babel/core').types.TemplateElement} TemplateElement */
/** @typedef {import('@babel/core').types.TemplateLiteral} TemplateLiteral */

//@ts-ignore
const originalMatchAll = require('string.prototype.matchall');

const {
  templateLiteral, templateElement, callExpression, identifier, arrowFunctionExpression,
  stringLiteral, arrayExpression, isTemplateLiteral, variableDeclarator, variableDeclaration,
} = require('@babel/core').types;
/**
 * @typedef {object} Result
 * @property {string} type
 * @property {string} value
 */

/**
 * @param {string} str
 * @param {RegExp} regexp
 */
const matchAll = (str, regexp) => originalMatchAll(str, regexp);

const REGEXP_TAGNAME = /(<\/?)([a-zA-Z0-9-]+-[a-zA-Z0-9-]+)/gm;

/**
 * @param {TemplateElement} quasi
 */
function transformQuasi(quasi) {
  const string = quasi.value.raw;
  /** @type {TemplateElement[]} */
  const quasis = [];
  /** @type {Expression[]} */
  const expressions = [];

  const matches = [...matchAll(string, REGEXP_TAGNAME)];
  if (matches.length === 0) {
    return stringLiteral(quasi.value.raw);
  }

  let previousEndI = 0;
  for (const match of matches) {
    const [_, prefix, tagName] = match;
    const quasiEndI = match.index + prefix.length;

    quasis.push(templateElement({ raw: string.slice(previousEndI, quasiEndI) }));
    expressions.push(callExpression(identifier('t'), [stringLiteral(tagName)]));
    previousEndI = quasiEndI + tagName.length;
  }

  if (previousEndI !== string.length) {
    quasis.push(templateElement({ raw: string.slice(previousEndI) }))
  }

  return templateLiteral(quasis, expressions);
}

/**
 * @param {string} variableName
 * @param {TemplateElement[]} quasis
 */
function transformQuasisWithDynamicTags(variableName, quasis) {
  const transformed = quasis.map(q => transformQuasi(q));
  let template;

  if (transformed.some(q => isTemplateLiteral(q))) {
    template = arrowFunctionExpression([identifier('t')], arrayExpression(transformed));
  } else {
    template = arrayExpression(transformed);
  }

  const varDeclarator = variableDeclarator(identifier(variableName), template);
  return variableDeclaration('const', [varDeclarator]);
}

module.exports = { transformQuasisWithDynamicTags };