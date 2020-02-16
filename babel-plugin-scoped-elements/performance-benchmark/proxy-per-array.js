//@ts-nocheck
/* eslint-disable */
const scopeTag = new Proxy({}, {
  get(obj, prop) {
    return prop + '\'';
  }
});

function html(strings, ...values) {
  const newStrings = typeof strings === 'function'
    ? strings(scopeTag)
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
const a = html(tA, []);

const tB = t => [`<${t['my-element']}>`, `</${t['my-element']}>`];
const b = html(tB, ['x']);

const tC = t => [`<${t['my-element']} foo="`, '"></', `${t['my-element']}>`];
const c = html(tC, ['x']);
