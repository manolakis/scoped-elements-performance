const __scopedTemplateStrings3__ = ["\n          <a ?active=", " @click=", "\n            >", "</a\n          >\n        "];
__scopedTemplateStrings3__.__compiled__ = true
const __scopedTemplateStrings2__ = [t => `
              <${t("shack-item")}
                class="shack-item"
                .title=`, "\n                .price=", "\n                @click=", t => `
              >
              </${t("shack-item")}>
            `];
__scopedTemplateStrings2__.__compiled__ = true
const __scopedTemplateStrings1__ = [t => `
      <header id="pageHeader">
        <h1 id="logo">SHACK</h1>
        <${t("shack-cart")} class="shack-cart" .items=`, t => `></${t("shack-cart")}>
        <nav id="categoryNav">`, "</nav>\n      </header>\n\n      <main id=\"categoryList\">\n        <div id=\"hero\"></div>\n        <h2 id=\"categoryTitle\">", "</h2>\n        <span id=\"numItems\">\n          (", " items)\n        </span>\n\n        <div id=\"list\">\n          ", "\n        </div>\n      </main>\n\n      <footer id=\"footer\">\n        <div id=\"demoNotice\">DEMO ONLY</div>\n      </footer>\n    "];
__scopedTemplateStrings1__.__compiled__ = true

/* eslint-disable lit/no-invalid-html,lit/binding-positions */
// @ts-nocheck

/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { css, html, LitElement } from '../../../web_modules/lit-element.js';
import { ScopedElementsMixin } from './scoped-elements/ScopedElementsMixin.js';
import { ShackItem } from './shack-item.js';
import { ShackCart } from './shack-cart.js';
export class ShackApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'shack-item': ShackItem,
      'shack-cart': ShackCart
    };
  }

  static get properties() {
    return {
      page: {
        type: String
      },
      cart: {
        type: Array
      },
      categories: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #pageHeader {
        flex-basis: 130px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #logo {
        margin: 26px 0 0 0;
        font-size: 16px;
        letter-spacing: 4px;
        color: #202020;
      }

      .shack-cart {
        position: absolute;
        right: 20px;
        top: 20px;
      }

      #categoryNav {
        display: flex;
        justify-content: center;
        margin-top: 46px;
      }

      #categoryNav > a {
        margin: 0 20px;
        text-decoration: none;
        color: #202020;
        font-size: 13px;
        padding-bottom: 9px;
        min-width: 110px;
        text-align: center;
        cursor: pointer;
      }

      #categoryNav > a[active] {
        border-bottom: 2px solid #172c50;
      }

      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 500px;
        flex-grow: 1;
        width: 100%;
      }

      #hero {
        width: 100%;
        flex-basis: 320px;
        flex-shrink: 0;
        background-color: #e7e7e7;
      }

      #categoryTitle {
        font-size: 16px;
        font-weight: normal;
        margin: 37px 0 0 0;
      }

      #numItems {
        color: #757575;
        font-size: 13px;
        margin-top: 8px;
      }

      #list {
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
      }

      .shack-item {
        flex-basis: 33%;
        margin-top: 43px;
      }

      .shack-item:nth-child(7n + 1) {
        --shack-item-placeholder-color: #d1fdb5;
      }
      .shack-item:nth-child(7n + 2) {
        --shack-item-placeholder-color: #ffe7a6;
      }
      .shack-item:nth-child(7n + 3) {
        --shack-item-placeholder-color: #ffe4fe;
      }
      .shack-item:nth-child(7n + 4) {
        --shack-item-placeholder-color: #cfffff;
      }
      .shack-item:nth-child(7n + 5) {
        --shack-item-placeholder-color: #feff9b;
      }
      .shack-item:nth-child(7n + 6) {
        --shack-item-placeholder-color: #d0ebff;
      }
      .shack-item:nth-child(7n + 7) {
        --shack-item-placeholder-color: #ffd9d9;
      }

      #demoNotice {
        background-color: #202020;
        color: white;
        font-size: 12px;
        padding: 12px 24px;
        margin-top: 30px;
      }
    `;
  }

  constructor() {
    super();
    this.cart = [];
  }

  render() {
    return html(__scopedTemplateStrings1__, this.cart, this.categoryNav(), this.categories[this.page].title, this.categories[this.page].items.length, this.categories[this.page].items.map(item => html(__scopedTemplateStrings2__, item.title, item.price, e => this.clickItem(item, e))));
  }

  categoryNav() {
    return Object.keys(this.categories).map(c => html(__scopedTemplateStrings3__, this.page === c, e => this.clickCategory(c, e), this.categories[c].title));
  }

  clickCategory(category, event) {
    event.preventDefault();
    this.page = category;
  }

  clickItem(item, event) {
    event.preventDefault();
    this.cart = [item.title, ...this.cart];
  }

}