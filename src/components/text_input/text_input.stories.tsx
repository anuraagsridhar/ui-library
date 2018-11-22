import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { TextInput } from './text_input';

storiesOf('components.text_input', module)
  .add('Static Examples', () => {
    return (
      <section>
        <fieldset>
          <legend>Plain Text</legend>
          <TextInput type="text" placeholder="Enter username" value={text('input_value', 'testing')} onSetValue={action('input value changed')}/>
        </fieldset>
        <fieldset>
          <legend>Passwords</legend>
          <TextInput type="password" placeholder="Enter password" value={text('input_value', 'testing')} onSetValue={action('input value changed')}/>
        </fieldset>
      </section>
    );
  })
;
