import * as React from 'react';

// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Panel } from '../panel';

storiesOf('ui.components.panel', module)
  .add('Static Examples', () => {
    return (
      <section>
        <fieldset>
          <legend>Primary</legend>
          <Panel heading="Search Parameters">
          Testing panel content. Everything here should be rendered in a panel.
          </Panel>
          <input type="multirange" />
        </fieldset>
      </section>
    );
  })
;
