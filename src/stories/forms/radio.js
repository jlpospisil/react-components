import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Radio } from '../../components/forms';

const radioOptions = ['Option1', 'Option2', 'Option3', 'Option4'];

// Generate the stories
storiesOf('Forms|Radios', module)
  .add('default', () => (
    <Radio
      disabled={boolean('disabled', false)}
      inline={boolean('inline', true)}
      size={number('size', 2)}
      color={text('color')}
      options={radioOptions}
      selected={select('selected',[null, ...radioOptions])}
      onClick={(newVal) => {
        action('Radio Clicked')(newVal);
      }}
    />
  ));
