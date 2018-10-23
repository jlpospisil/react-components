import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Radio } from '../../components/forms';

const radioOptions = [
  { text: 'Option 1', size: 1, color: null },
  { text: 'Option 2', size: 1, color: null },
  { text: 'Option 3', size: 1, color: null },
];

const selectedOptions = radioOptions.reduce((aggrigator, option) => {
  aggrigator[option.text] = option;
  return aggrigator;
}, { 'None Selected': null });

// Generate the stories
storiesOf('Forms|Radios', module)
  .add('default', () => (
    <Radio
      disabled={boolean('Disabled', false)}
      size={number('size', 2)}
      color={text('color')}
      options={radioOptions}
      // selected={select('selected', selectedOptions)}   // Objects are causing errors
      onClick={(newVal) => {
        action('Radio Clicked')(newVal);
      }}
    />
  ));
