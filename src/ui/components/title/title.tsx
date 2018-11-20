import * as React from 'react';

import * as styles from './title.css';

/** Properties of the title component. */
export interface TitleProps {
  /** Title to render. */
  title: string;
}

/** Title component. */
export class Title extends React.Component<TitleProps> {
  /** Render method. */
  render() {
    return (
      <div className={styles.title}>
        {this.props.title}
      </div>
    );
  }
}
