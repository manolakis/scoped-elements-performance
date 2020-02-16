import { LitElement, html } from "lit-element";

function createElement(name) {
  class MyElement extends LitElement {
    render() {
      return html`<span> ${name} </span><slot></slot>`;
    }
  }
  customElements.define(name, MyElement);
  return MyElement;
}

export const scopedElements = {};

for (let i = 0; i < 100; i += 1) {
  const name = `my-element-${i}`;
  scopedElements[name] = createElement(name);
}