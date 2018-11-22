import * as React from 'react';
import * as styles from './require_authentication.css';

/** Properties of the required authentication component. */
export interface RequireAuthenticationProps {
  /** Whether the user is currently authenticated. */
  isAuthenticated: boolean;
  /** Login form renderer. */
  LoginForm(): JSX.Element;
}

/** HOC Component to render a login form if user is not currently authenticated. */
export class RequireAuthentication extends React.Component<RequireAuthenticationProps> {
  /** Render method. */
  render() {
    const { isAuthenticated, LoginForm } = this.props;
    if (!isAuthenticated) {
      return (
        <div className={styles.loginFormContainer}>
          <LoginForm />
        </div>
      );
    }
    return (
      <div className={styles.requireAuthentication}>
        {this.props.children}
      </div>
    );
  }
}
