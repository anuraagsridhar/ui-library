import * as classNames from 'classnames';
import * as React from 'react';

import * as styles from './panel.css';

/** Properties of the panel component. */
export interface PanelProps {
  className?: string;
  /** Panel heading. */
  heading: string;
}

/** Panel component. */
export class Panel extends React.Component<PanelProps> {
  /** Render method. */
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(styles.panel, className)}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>{this.props.heading}</div>
        </div>
        <div className={styles.contentContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
