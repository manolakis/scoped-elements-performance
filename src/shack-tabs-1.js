import { LitElement, html } from "lit-element";

import { LionSwitch } from '@lion/switch';
import '@lion/switch/lion-switch.js';
import { LionButton } from '@lion/button';
import '@lion/button/lion-button.js';
import { LionTabs } from '@lion/tabs';
import '@lion/tabs/lion-tabs.js';
import { LionInputRange } from '@lion/input-range';
import '@lion/input-range/lion-input-range.js';
import { LionTextarea } from '@lion/textarea';
import '@lion/textarea/lion-textarea.js';

import { ScopedElementsMixin } from './scoped-elements/ScopedElementsMixin.js';

export class ShackTabs1 extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-switch': LionSwitch,
      'lion-button': LionButton,
      'lion-tabs': LionTabs,
      'lion-input-range': LionInputRange,
      'lion-textarea': LionTextarea,
    };
  }

  render() {
    return html`
        <lion-tabs>
          <lion-button slot="tab">Info</lion-button>
          <p slot="panel">

            Info page with lots of information about us.
             <lion-input-range min="200" max="500" .modelValue="${300}" label="Input range"></lion-input-range>
             <lion-textarea label="Stops growing after 4 rows" max-rows="4"></lion-textarea>

          </p>

          <lion-button slot="tab">Work</lion-button>

          <p slot="panel">
            Work page that showcases our work.

            <lion-switch label="Label" disabled></lion-switch>
            <lion-textarea label="Stops growing after 4 rows" max-rows="4"></lion-textarea>

          </p>
        </lion-tabs>
    `;
  }
}

customElements.define('shack-tabs-1', ShackTabs1);