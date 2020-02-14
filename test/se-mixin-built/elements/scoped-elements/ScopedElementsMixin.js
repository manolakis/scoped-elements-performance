import { TemplateResult } from '../../../../web_modules/lit-html.js';
import { transform } from "./transform.js";
import { registerElement } from "./scoped-elements.js";

const transformTemplate = (template, scopedElements, cache) => new TemplateResult(transform(template.strings, scopedElements, cache), transformArray(template.values, scopedElements, cache), template.type, template.processor);

const transformArray = (items, scopedElements, cache) => {
  return items.map(value => {
    if (value instanceof TemplateResult) {
      return transformTemplate(value, scopedElements, cache);
    } else if (Array.isArray(value)) {
      return transformArray(value, scopedElements, cache);
    }

    return value;
  });
};

const decorate = litRender => {
  return (template, container, options) => {
    const element = options.eventContext;

    if (!element.constructor.hasOwnProperty("templateCache")) {
      element.constructor.templateCache = new Map();
    }

    const {
      scopedElements,
      templateCache
    } = element.constructor;
    const transformedTemplate = transformTemplate(template, scopedElements, templateCache);
    return litRender(transformedTemplate, container, options);
  };
};

const createScopedElement = tagName => {
  console.log(tagName, this.constructor.scopedElements);
};

export const ScopedElementsMixin = base => {
  class ScopedElement extends base {
    constructor() {
      super();
      ScopedElement.render = decorate(base.render);
    }

    createElement(tagName) {
      const klass = this.constructor.scopedElements[tagName];
      return document.createElement(registerElement(tagName, klass));
    }

  }

  return ScopedElement;
};