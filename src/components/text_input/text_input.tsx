import * as React from 'react';

import * as styles from './text_input.css';

/** Enum type of text input. */
export type TextInputType = 'text' | 'password';

/** Properties of the custom input element */
export interface TextInputProps {
  /** Current value */
  value: string;
  /** Type of the text input. */
  type: TextInputType;
  /** Placeholder to render when empty string. */
  placeholder: string;

  /** Callback on text input value changed. */
  onSetValue(val: string): void;
}

/** Text input component. */
export class TextInput extends React.Component<TextInputProps> {
  /** Render method. */
  render() {
    return (
      <div className={styles.textInput}>
        <input
          className={styles.input}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.onChange}
          value={this.props.value}
        />
      </div>
    );
  }

  /** Callback on change of text input value. */
  private onChange = (elt: React.ChangeEvent<HTMLInputElement>) => {
    const { onSetValue } = this.props;
    onSetValue(elt.currentTarget.value);
    elt.preventDefault();
    elt.stopPropagation();
  }
}
