import { LitElement, html } from 'lit-element';
import '@lion/checkbox-group/lion-checkbox-group.js';
import { LionCheckboxGroup } from '@lion/checkbox-group';
import '@lion/checkbox/lion-checkbox.js';
import { LionCheckbox } from '@lion/checkbox';
import '@lion/select-rich/lion-select-rich.js';
import { LionSelectRich } from '@lion/select-rich';
import '@lion/select-rich/lion-options.js';
import { LionOptions } from '@lion/select-rich';
import '@lion/option/lion-option.js';
import { LionOption } from '@lion/option';
import '@lion/form/lion-form.js';
import { LionForm } from '@lion/form';

import { ScopedElementsMixin } from '../scoped-elements/ScopedElementsMixin.js';

export class ShackForm1 extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-checkbox-group': LionCheckboxGroup,
      'lion-checkbox': LionCheckbox,
      'lion-select-rich': LionSelectRich,
      'lion-options': LionOptions,
      'lion-option': LionOption,
      'lion-form': LionForm,
    };
  }

  render() {
    return html`
      <lion-form>
        <form>
          <lion-checkbox-group
            name="scientists[]"
            label="Favourite scientists"
          >
            <lion-checkbox label="Archimedes" .choiceValue=${'Archimedes'}></lion-checkbox>
            <lion-checkbox label="Francis Bacon" .choiceValue=${'Francis Bacon'}></lion-checkbox>
            <lion-checkbox label="Marie Curie" .choiceValue=${'Marie Curie'}></lion-checkbox>
          </lion-checkbox-group>

          <lion-select-rich name="favoriteColor" label="Favorite color">
            <lion-options slot="input">
              <lion-option .choiceValue=${'red'}>Red</lion-option>
              <lion-option .choiceValue=${'hotpink'} checked>Hotpink</lion-option>
              <lion-option .choiceValue=${'teal'}>Teal</lion-option>
            </lion-options>
          </lion-select-rich>
        </form>
      </lion-form>
    `;
  }
}

customElements.define('shack-form-1', ShackForm1);