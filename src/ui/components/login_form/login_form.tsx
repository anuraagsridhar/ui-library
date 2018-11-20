import * as React from 'react';

import { Button } from 'ui/components/button/button';
import { Panel } from 'ui/components/panel/panel';
import { TextInput } from 'ui/components/text_input/text_input';

import * as styles from './login_form.css';

/** Properties of the login form. */
export interface LoginFormProps {
  /** Current username value. */
  username: string;
  /** Current password value. */
  password: string;

  /** Callback on username change */
  onUsernameChange(username: string): void;
  /** Callback on password chnage. */
  onPasswordChange(password: string): void;
  /** Callback on clicking submit. */
  onSubmitLoginForm(): void;
}

/** Login form component. */
export class LoginForm extends React.PureComponent<LoginFormProps> {
  /** Render method. */
  render() {
    return (
      <div className={styles.loginForm}>
        <Panel heading="Login">
          <div className={styles.loginFormRow}>
            <div className={styles.label}>Username</div>
            <TextInput
              value={this.props.username}
              placeholder="Enter username"
              type="text"
              onSetValue={this.props.onUsernameChange}
            />
          </div>
          <div className={styles.loginFormRow}>
            <div className={styles.label}>Password</div>
            <TextInput
              value={this.props.password}
              placeholder="Enter password"
              type="password"
              onSetValue={this.props.onPasswordChange}
            />
          </div>
          <div className={styles.loginFormRow}>
            <Button
              label="Submit"
              type="primary"
              loading={false}
              onClick={this.props.onSubmitLoginForm}
            />
          </div>
        </Panel>
      </div>
    );
  }
}
