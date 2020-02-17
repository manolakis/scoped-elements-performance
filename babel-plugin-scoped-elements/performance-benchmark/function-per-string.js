//@ts-nocheck
/* eslint-disable */
const scopeTag = tag => `${tag}'`;

function transform(stringOrFn) {
  return typeof stringOrFn === 'function' ? stringOrFn(scopeTag) : stringOrFn;
}

function html(strings, ...values) {
  const newStrings = strings.map(str => transform(str));
  let result = '';
  newStrings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const tA = [t => `<${t('my-element')}></${t('my-element')}>`];
const a = html(tA, []);

const tB = [
  t => `<${t('my-element')}>`,
  t => `</${t('my-element')}>`
];
const b = html(tB, ['x']);

const tC = [
  t => `<${t('my-element')} foo="`,
  '"></',
  t => `${t('my-element')}>`
];
const c = html(tC, ['x']);
