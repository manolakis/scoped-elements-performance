// @ts-nocheck
import { createUniqueTag } from './tag.js';

const tagsCache = new Map();
const addToTagsCache = (tag, klass) => tagsCache.set(klass, tag);
const getFromTagsCache = klass => tagsCache.get(klass);

const defineElement = (tagName, klass) => {
  const registry = customElements;
  const tag = createUniqueTag(registry, tagName);

  // we extend it just in case the class has been defined manually
  registry.define(tag, class extends klass {});
  addToTagsCache(tag, klass);

  return tag;
};

export const registerElement = (tagName, klass) =>
    getFromTagsCache(klass) || defineElement(tagName, klass);
