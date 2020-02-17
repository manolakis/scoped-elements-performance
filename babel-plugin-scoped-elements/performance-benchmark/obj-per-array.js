//@ts-nocheck
/* eslint-disable */
function html(strings, tagNames, ...values) {
  const scopedTags = {};
  for (const name of tagNames) {
    scopedTags[name] = name + '\'';
  }

  const newStrings = typeof strings === 'function'
    ? strings(scopedTags)
    : strings;
  let result = '';
  newStrings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const tA = t => [`<${t['my-element']}></${t['my-element']}>`];
const sA = ['my-element'];
const a = html(tA, sA, []);

const tB = t => [`<${t['my-element']}>`, `</${t['my-element']}>`];
const sB = ['my-element'];
const b = html(tB, sB, ['x']);

const tC = t => [`<${t['my-element']} foo="`, '"></', `${t['my-element']}>`];
const sC = ['my-element'];
const c = html(tC, sC, ['x']);
