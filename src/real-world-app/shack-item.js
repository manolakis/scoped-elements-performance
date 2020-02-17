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
import '@lion/button/lion-button.js';
import { LionButton } from '@lion/button';
import '@lion/icon/lion-icon.js';
import { LionIcon } from '@lion/icon';
import '@lion/input-datepicker/lion-input-datepicker.js';
import { LionInputDatepicker } from '@lion/input-datepicker';

import bugIcon from './bugs/bug01.svg.js';
import { ScopedElementsMixin } from '../scoped-elements/ScopedElementsMixin.js';

export class ShackItem extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-icon': LionIcon,
      'lion-input-datepicker': LionInputDatepicker,
    };
  }

  static get properties() {
    return {
      title: { type: String },
      price: { type: Number },
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
    return html`
      <lion-button>
        <lion-icon .svg=${bugIcon}></lion-icon>
      </lion-button>
      <lion-input-datepicker></lion-input-datepicker>
      <div class="imagePlaceholder"></div>
      <span class="title">${this.title}</span>
      <span class="price">$${this.price.toFixed(2)}</span>
    `;
  }
}

customElements.define('shack-item', ShackItem);
