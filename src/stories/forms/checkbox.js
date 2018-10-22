import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from '../../components/forms';

// Generate the stories
storiesOf('Forms|CheckBoxes', module)
  .add('Default', () => {
    return (
      <CheckBox
        checked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        size={number('size', 2)}
        color={text('color')}
      />
    );
  });