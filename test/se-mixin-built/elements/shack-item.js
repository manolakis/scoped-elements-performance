const __scopedTemplateStrings1__ = ["\n      <div class=\"imagePlaceholder\"></div>\n      <span class=\"title\">", "</span>\n      <span class=\"price\">$", "</span>\n    "];
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
export class ShackItem extends LitElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      price: {
        type: Number
      }
    };
  }

  static get styles() {
    return css`
      :host {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .imagePlaceholder {
        height: 125px;
        width: 130px;
        padding-top: 24px;
        background-color: var(--shack-item-placeholder-color, gray);
      }

      .title {
        color: #202020;
        font-size: 13px;
        font-weight: bold;
        margin-top: 36px;
        text-align: center;
      }

      .price {
        color: #757575;
        font-size: 13px;
        margin-top: 4px;
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.price = 0;
  }

  render() {
    return html(__scopedTemplateStrings1__, this.title, this.price.toFixed(2));
  }

}