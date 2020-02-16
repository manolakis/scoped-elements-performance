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

import { css, html, LitElement } from 'lit-element';

import { categories } from './data.js';
import { ScopedElementsMixin } from '../scoped-elements/ScopedElementsMixin.js';
import './shack-item.js';
import './shack-cart.js';
import { ShackForm1 } from './shack-form-1.js';
import { ShackForm2 } from './shack-form-2.js';
import { ShackForm3 } from './shack-form-3.js';
import { ShackForm4 } from './shack-form-4.js';
import { ShackForm5 } from './shack-form-5.js';
import { ShackForm6 } from './shack-form-6.js';
import { ShackTabs1 } from './shack-tabs-1.js';
import { ShackTabs2 } from './shack-tabs-2.js';
import { ShackTabs3 } from './shack-tabs-3.js';
import { ShackTabs4 } from './shack-tabs-4.js';
import { ShackTabs5 } from './shack-tabs-5.js';
import { ShackTabs6 } from './shack-tabs-6.js';

class ShackApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'shack-form-1': ShackForm1,
      'shack-form-2': ShackForm2,
      'shack-form-3': ShackForm3,
      'shack-form-4': ShackForm4,
      'shack-form-5': ShackForm5,
      'shack-form-6': ShackForm6,
      'shack-tabs-1': ShackTabs1,
      'shack-tabs-2': ShackTabs2,
      'shack-tabs-3': ShackTabs3,
      'shack-tabs-4': ShackTabs4,
      'shack-tabs-5': ShackTabs5,
      'shack-tabs-6': ShackTabs6,
    };
  }

  static get properties() {
    return {
      page: { type: String },
      cart: { type: Array },
      categories: { type: Object },
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
    this.categories = categories;
    this.page = 'mens_tshirts';
  }

  render() {
    return html`
      <header id="pageHeader">
        <h1 id="logo">SHACK</h1>
        <shack-cart class="shack-cart" .items=${this.cart}></shack-cart>
        <nav id="categoryNav">${this.categoryNav()}</nav>
      </header>

      <main id="categoryList">
        <div id="hero"></div>

        <shack-form-1></shack-form-1>
        <shack-tabs-1></shack-tabs-1>

        <shack-form-2></shack-form-2>
        <shack-tabs-2></shack-tabs-2>

        <shack-form-3></shack-form-3>
        <shack-tabs-3></shack-tabs-3>

        <h2 id="categoryTitle">${this.categories[this.page].title}</h2>
        <span id="numItems">
          (${this.categories[this.page].items.length} items)
        </span>

        <div id="list">
          ${this.categories[this.page].items.map(
            item => html`
              <shack-item
                class="shack-item"
                .title=${item.title}
                .price=${item.price}
                @click=${e => this.clickItem(item, e)}
              >
              </shack-item>
            `,
          )}
        </div>

        <shack-form-4></shack-form-4>
        <shack-tabs-4></shack-tabs-4>

        <shack-form-5></shack-form-5>
        <shack-tabs-5></shack-tabs-5>

        <shack-form-6></shack-form-6>
        <shack-tabs-6></shack-tabs-6>

      </main>
    `;
  }

  categoryNav() {
    return Object.keys(this.categories).map(
        c =>
            html`
          <a ?active=${this.page === c} @click=${e => this.clickCategory(c, e)}
            >${this.categories[c].title}</a
          >
        `,
    );
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

customElements.define('shack-app', ShackApp);
