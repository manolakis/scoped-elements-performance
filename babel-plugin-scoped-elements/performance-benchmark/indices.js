//@ts-nocheck
/* eslint-disable */
const scopeTag = tag => `${tag}'`;

function transform(stringOrFn) {
  return typeof stringOrFn === 'function' ? stringOrFn(scopeTag) : stringOrFn;
}

function html(strings, values) {
  const newStrings = strings.map((str, i) => {
    const indices = strings.indices[i];
    if (!indices) return str;

    let newString = str;
    const count = indices.length / 2;

    for (let i = 0; i < count; i += 1) {
      const ii = i * 2;
      const start = indices[ii];
      const end = indices[ii + 1];
      const tagName = newString.slice(start, end);
      newString = newString.slice(0, start) + scopeTag(tagName) + newString.slice(end);
    }
    return newString;
  });

  let result = '';
  newStrings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const tA = ['<my-element></my-element>'];
tA.indices = [[1, 11, 14, 25]];
const a = html(tA, []);

const tB = ['<my-element>', '</my-element>'];
tB.indices = [[1, 11], [1, 12]]
const b = html(tB, ['x']);

const tC = ['<my-element foo="', '"></', 'my-element>'];
tC.indices = [[1, 11], undefined, [0, 10]]
const c = html(tC, ['x']);
