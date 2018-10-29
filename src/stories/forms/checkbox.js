import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from '../../components/forms';

// Generate the stories
storiesOf('Components|Form', module)
  .add('Check Box', () => (
    <CheckBox
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      size={number('size')}
      color={text('color')}
      label={{
        text: text('label text', 'Check box label'),
        size: number('label size', 1),
        color: text('label color'),
      }}
      onClick={() => {
        action('CheckBox Clicked')('Typically you would adjust the checked property here.');
      }}
    />
  ));
