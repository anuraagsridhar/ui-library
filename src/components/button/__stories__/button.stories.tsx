import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from '../button';

storiesOf('ui.components.button', module)
  .add('Static Examples', () => {
    return (
      <section>
        <fieldset>
          <legend>Primary</legend>
          <Button type="primary" loading={false} label={text('label', 'Submit')} onClick={action('button clicked')}/>
        </fieldset>
        <fieldset>
          <legend>Secondary</legend>
          <Button type="secondary" loading={false} label={text('label', 'Cancel')} onClick={action('button clicked')}/>
        </fieldset>
        <fieldset>
          <legend>Loading</legend>
          <Button type="primary" loading={true} label={text('label', 'Cancel')} onClick={action('button clicked')}/>
        </fieldset>
      </section>
    );
  })
;
