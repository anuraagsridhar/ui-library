import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { LoginForm } from '../login_form';

storiesOf('ui.components.login_form', module)
  .add('Static Examples', () => {
    return (
      <section>
        <fieldset>
          <LoginForm
            username={text('username', 'asridhar')}
            password={text('password', 'testpass')}
            onUsernameChange={action('username changed')}
            onPasswordChange={action('password changed')}
            onSubmitLoginForm={action('submit login form')}
          />
        </fieldset>
      </section>
    );
  })
;
