import { LitElement, html, css } from "lit-element";
import { ScopedElementsMixin } from '../scoped-elements/ScopedElementsMixin.js';
// import { Page1 } from './page-1.js';
// import { Page2 } from './page-2.js';
// import { Page3 } from './page-3.js';
// import { Page4 } from './page-4.js';
// import { Page5 } from './page-5.js';
// import { Page6 } from './page-6.js';
// import { Page7 } from './page-7.js';
// import { Page8 } from './page-8.js';
// import { Page9 } from './page-9.js';
// import { Page10 } from './page-10.js';
import { Page11 } from './page-11.js';
import { Page12 } from './page-12.js';
import { Page13 } from './page-13.js';
import { Page14 } from './page-14.js';
import { Page15 } from './page-15.js';
import { Page16 } from './page-16.js';
import { Page17 } from './page-17.js';
import { Page18 } from './page-18.js';
import { Page19 } from './page-19.js';
import { Page20 } from './page-20.js';
// import { Page21 } from './page-21.js';
// import { Page22 } from './page-22.js';
// import { Page23 } from './page-23.js';
// import { Page24 } from './page-24.js';
// import { Page25 } from './page-25.js';
// import { Page26 } from './page-26.js';
// import { Page27 } from './page-27.js';
// import { Page28 } from './page-28.js';
// import { Page29 } from './page-29.js';
// import { Page30 } from './page-30.js';

class ShackApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      // 'page-1': Page1,
      // 'page-2': Page2,
      // 'page-3': Page3,
      // 'page-4': Page4,
      // 'page-5': Page5,
      // 'page-6': Page6,
      // 'page-7': Page7,
      // 'page-8': Page8,
      // 'page-9': Page9,
      // 'page-10': Page10,
      'page-11': Page11,
      'page-12': Page12,
      'page-13': Page13,
      'page-14': Page14,
      'page-15': Page15,
      'page-16': Page16,
      'page-17': Page17,
      'page-18': Page18,
      'page-19': Page19,
      'page-20': Page20,
      'page-20': Page20,
      // 'page-21': Page21,
      // 'page-22': Page22,
      // 'page-23': Page23,
      // 'page-24': Page24,
      // 'page-25': Page25,
      // 'page-26': Page26,
      // 'page-27': Page27,
      // 'page-28': Page28,
      // 'page-29': Page29,
      // 'page-30': Page30,
    };
  }

  static get styles() {
    return css`
      * {
        display: block;
        border: 1px solid black;
        padding: 8px;
      }
    `;
  }

  render() {
    return html`
      <page-11></page-11>
      <page-12></page-12>
      <page-13></page-13>
      <page-14></page-14>
      <page-15></page-15>
      <page-16></page-16>
      <page-17></page-17>
      <page-18></page-18>
      <page-19></page-19>
      <page-20></page-20>
    `;
  }
}


// <page-1></page-1>
// <page-2></page-2>
// <page-3></page-3>
// <page-4></page-4>
// <page-5></page-5>
// <page-6></page-6>
// <page-7></page-7>
// <page-8></page-8>
// <page-9></page-9>
// <page-10></page-10>


// <page-20></page-20>
// <page-21></page-21>
// <page-22></page-22>
// <page-23></page-23>
// <page-24></page-24>
// <page-25></page-25>
// <page-26></page-26>
// <page-27></page-27>
// <page-28></page-28>
// <page-29></page-29>
// <page-30></page-30>

customElements.define('shack-app', ShackApp);