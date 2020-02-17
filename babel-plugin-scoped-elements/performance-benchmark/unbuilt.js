// @ts-nocheck
const re = /<\/?([a-zA-Z0-9-]+)/g;
const globalCache = new Map();

const matchAll = str => {
  const matches = [];
  let result;
  // eslint-disable-next-line no-cond-assign
  while ((result = re.exec(str)) !== null) {
    matches.push(result);
  }

  return matches;
};

const transformTemplate = (strings, cache) => {
  const scopeTag = tagName => tagName + '\'';

  let transformedStrings;
    transformedStrings = strings.map(str => {
      let acc = str;
      const matches = matchAll(str);

      for (let i = matches.length - 1; i >= 0; i -= 1) {
        const item = matches[i];
        const tag = scopeTag(item[1]);
        const start = item.index + item[0].length - item[1].length;
        const end = start + item[1].length;

        acc = acc.slice(0, start) + tag + acc.slice(end);
      }

      return acc;
    });

  cache.set(strings, transformedStrings);

  return transformedStrings;
};

const transform = (strings, cache = globalCache) =>
    cache.get(strings) || transformTemplate(strings, cache);


/* eslint-disable */
function html(strings, ...values) {
  const transformed = transform(strings);
  let result = '';
  transformed.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const a = html`<my-element></my-element>`;

const b = html`<my-element>${'x'}</my-element>`;

const c = html`<my-element foo="${'x'}"></my-element>`;
