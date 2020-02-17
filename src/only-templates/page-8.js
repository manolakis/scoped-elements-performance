import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from '../scoped-elements/ScopedElementsMixin.js';
import { scopedElements } from './elements.js';

export class Page8 extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return scopedElements;
  }

  render() {
    return html`
      <my-element-0></my-element-0>
      <my-element-1></my-element-1>
      <my-element-2></my-element-2>
      <my-element-3></my-element-3>
      <my-element-4></my-element-4>
      <my-element-5></my-element-5>
      <my-element-6></my-element-6>
      <my-element-7></my-element-7>
      <my-element-8></my-element-8>
      <my-element-9></my-element-9>
      <my-element-10></my-element-10>
      <my-element-11></my-element-11>
      <my-element-12></my-element-12>
      <my-element-13></my-element-13>
      <my-element-14></my-element-14>
      <my-element-15></my-element-15>
      <my-element-16></my-element-16>
      <my-element-17></my-element-17>
      <my-element-18></my-element-18>
      <my-element-19></my-element-19>
      <my-element-20></my-element-20>
      <my-element-21></my-element-21>
      <my-element-22></my-element-22>
      <my-element-23></my-element-23>
      <my-element-24></my-element-24>
      <my-element-25></my-element-25>
      <my-element-26></my-element-26>
      <my-element-27></my-element-27>
      <my-element-28></my-element-28>
      <my-element-29></my-element-29>
      <my-element-30></my-element-30>
      <my-element-31></my-element-31>
      <my-element-32></my-element-32>
      <my-element-33></my-element-33>
      <my-element-34></my-element-34>
      <my-element-35></my-element-35>
      <my-element-36></my-element-36>
      <my-element-37></my-element-37>
      <my-element-38></my-element-38>
      <my-element-39></my-element-39>
      <my-element-40></my-element-40>
      <my-element-41></my-element-41>
      <my-element-42></my-element-42>
      <my-element-43></my-element-43>
      <my-element-44></my-element-44>
      <my-element-45></my-element-45>
      <my-element-46></my-element-46>
      <my-element-47></my-element-47>
      <my-element-48></my-element-48>
      <my-element-49></my-element-49>
      <my-element-50></my-element-50>
      <my-element-51></my-element-51>
      <my-element-52></my-element-52>
      <my-element-53></my-element-53>
      <my-element-54></my-element-54>
      <my-element-55></my-element-55>
      <my-element-56></my-element-56>
      <my-element-57></my-element-57>
      <my-element-58></my-element-58>
      <my-element-59></my-element-59>
      <my-element-60></my-element-60>
      <my-element-61></my-element-61>
      <my-element-62></my-element-62>
      <my-element-63></my-element-63>
      <my-element-64></my-element-64>
      <my-element-65></my-element-65>
      <my-element-66></my-element-66>
      <my-element-67></my-element-67>
      <my-element-68></my-element-68>
      <my-element-69></my-element-69>
      <my-element-70></my-element-70>
      <my-element-71></my-element-71>
      <my-element-72></my-element-72>
      <my-element-73></my-element-73>
      <my-element-74></my-element-74>
      <my-element-75></my-element-75>
      <my-element-76></my-element-76>
      <my-element-77></my-element-77>
      <my-element-78></my-element-78>
      <my-element-79></my-element-79>
      <my-element-80></my-element-80>
      <my-element-81></my-element-81>
      <my-element-82></my-element-82>
      <my-element-83></my-element-83>
      <my-element-84></my-element-84>
      <my-element-85></my-element-85>
      <my-element-86></my-element-86>
      <my-element-87></my-element-87>
      <my-element-88></my-element-88>
      <my-element-89></my-element-89>
      <my-element-90></my-element-90>
      <my-element-91></my-element-91>
      <my-element-92></my-element-92>
      <my-element-93></my-element-93>
      <my-element-94></my-element-94>
      <my-element-95></my-element-95>
      <my-element-96></my-element-96>
      <my-element-97></my-element-97>
      <my-element-98></my-element-98>
      <my-element-99></my-element-99>

      <button @click=${() => this.dispatchEvent(new Event('button-clicked'))}>Click me</button>
    `;
  }
}

customElements.define('page-8', Page8);
