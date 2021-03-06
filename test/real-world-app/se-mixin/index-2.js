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

// @ts-ignore
// eslint-disable-next-line import/no-absolute-path,import/no-unresolved
import * as bench from '/bench.js';
import '../../../dist/real-world-app/mixin/shack-app.js';

const retry = async func =>
    new Promise(resolve => {
      setTimeout(() => resolve(func()));
    });

const findElement = async (parent, selector) => {
  const element = parent.querySelector(selector);

  if (element) {
    // updateComplete works only with LitElement components
    await Promise.resolve(element.updateComplete);

    return element;
  }

  return retry(() => findElement(parent, selector));
};

const findElements = async (parent, selector) => {
  const elements = [...parent.querySelectorAll(selector)];

  if (elements) {
    // updateComplete works only with LitElement components
    await Promise.all(elements.map(element => Promise.resolve(element.updateComplete)));

    return elements;
  }

  return retry(() => findElement(parent, selector));
};

const createClickEvent = () => {
  const clickEvent = document.createEvent('MouseEvents');
  clickEvent.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null,
  );

  return clickEvent;
};

const execute = async () => {
  const app = document.createElement('shack-app');
  document.body.appendChild(app);

  const $shackApp = await findElement(document.body, 'shack-app');
  const $shackItems = await findElements($shackApp.shadowRoot, '.shack-item');
  const $shackCart = await findElement($shackApp.shadowRoot, '.shack-cart');
  const $cart = await findElement($shackCart.shadowRoot, 'a');

  $shackApp.addEventListener('shack-cart-clicked', () => requestAnimationFrame(() => bench.stop()));
  $shackItems.forEach(item => item.click());
  $cart.dispatchEvent(createClickEvent());
};

execute();
