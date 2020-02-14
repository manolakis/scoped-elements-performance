const __scopedTemplateStrings1__ = ["\n      <a id=\"button\" @click=\"", "\">\uD83D\uDED2</a>\n      <div id=\"badge\">", "</div>\n    "];
__scopedTemplateStrings1__.__compiled__ = true

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
import { css, html, LitElement } from 'https://unpkg.com/lit-element@^2.2.1?module';
export class ShackCart extends LitElement {
  static get properties() {
    return {
      items: {
        type: Array
      }
    };
  }

  static get styles() {
    return css`
      #button {
        font-size: 24px;
      }

      #badge {
        position: absolute;
        right: -7px;
        top: -7px;
        background-color: #172c50;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    `;
  }

  constructor() {
    super();
    this.items = [];
  }

  click() {
    this.dispatchEvent(new CustomEvent('shack-cart-clicked', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html(__scopedTemplateStrings1__, () => this.click(), this.items.length);
  }

}