import classNames from 'classnames';
import * as React from 'react';

import * as styles from './button.css';

/** Enum type of the button. */
export type ButtonType = 'primary' | 'secondary';

/** Properties passed in to the button component. */
export interface ButtonProps {
  /** Label to display. */
  label: string;
  /** Type of the button. */
  type: ButtonType;
  /** Whether the button state is loading. */
  loading: boolean;
  /** Callback on button click. */
  onClick(): void;
}

/** Button component. */
export class Button extends React.Component<ButtonProps> {
  /** Render method. */
  render() {
    const buttonClass = classNames(styles.button, {
      [styles.primary]: this.props.type === 'primary',
      [styles.secondary]: this.props.type === 'secondary',
    });
    return (
      <div className={buttonClass} onClick={this.props.onClick}>
        <div className={styles.buttonLabel}>
        {this.props.loading
          ? <i className={classNames('fas', 'fa-cog', 'fa-spin', styles.loadingSpinner)} />
          : this.props.label
        }
        </div>
      </div>
    );
  }
}
