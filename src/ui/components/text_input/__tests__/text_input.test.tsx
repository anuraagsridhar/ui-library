
import * as React from 'react';

import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { TextInput } from '../text_input';

configure({ adapter: new ReactSixteenAdapter() });

describe('text input', () => {
  it('changes value on text change', () => {
    const onSetValue = jest.fn();
    const wrapper = shallow(
      <TextInput
        onSetValue={onSetValue}
        value="first bit of text"
        type="text"
        placeholder="Text Placeholder"
      />,
    );
    const inputElement = wrapper.find('input');
    inputElement.simulate('change', {
      currentTarget: {
        value: 'second bit of text',
      },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    expect(onSetValue).toBeCalledWith('second bit of text');
  });
});
