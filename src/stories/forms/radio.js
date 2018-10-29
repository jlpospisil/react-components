import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Radio } from '../../components/forms';

const radioOptions = ['Option1', 'Option2', 'Option3', 'Option4'];

// Generate the stories
storiesOf('Forms|Inputs', module)
  .add('Radios', () => {
    // props
    const disabled = boolean('disabled', false);
    const inline = boolean('inline', true);
    const size = number('size');
    const color = text('color');

    // label props
    const labelSize = number('label size');
    const labelColor = text('label color');
    const options = radioOptions.map(option => {
      return {
        text: option,
        size: labelSize,
        color: labelColor,
      }
    });

    // get selected option
    let selectedOption = select('selected',[null, ...radioOptions]);
    selectedOption = options.find(option => option.text === selectedOption);

    return (<Radio
      disabled={disabled}
      inline={inline}
      size={size}
      color={color}
      options={options}
      selected={selectedOption}
      onClick={(newVal) => {
        action('Radio Clicked')(newVal);
      }}
    />);
});
