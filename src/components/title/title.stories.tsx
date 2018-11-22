import * as React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Title } from './title';

storiesOf('components.title', module)
  .add('Static Examples', () => {
    return (
      <section>
        <fieldset>
          <legend>Plain Text</legend>
          <Title title={text('input_value', 'Title')} />
        </fieldset>
      </section>
    );
  })
;
