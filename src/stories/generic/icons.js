import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import * as FA from 'react-icons/fa';
import * as MD from 'react-icons/md';
import * as Ion from 'react-icons/io';
import * as Typicons from 'react-icons/ti'
import * as GO from 'react-icons/go';
import * as Feather from 'react-icons/fi';
import { Icon } from '../../components/generic';

const availableIcons = {
  Feather: { type: 'Feather', icons: Object.keys(Feather) },
  FontAwesome: { type: 'FontAwesome', icons: Object.keys(FA) },
  'Github Octicons': { type: 'GO', icons: Object.keys(GO) },
  Ionicons: { type: 'Ionicons', icons: Object.keys(Ion) },
  MaterialDesign: { type: 'MaterialDesign', icons: Object.keys(MD) },
  TypIcons: { type: 'TypIcons', icons: Object.keys(Typicons) },
};

// Display available icons the the action logger pane
action('Available Icons')(availableIcons);

// Select random Icon
const iconSets = Object.keys(availableIcons);
const selectedIconSet = iconSets[Math.floor(Math.random() * iconSets.length)];
const selectedIconSetIcons = availableIcons[selectedIconSet].icons;
const selectedIcon = selectedIconSetIcons[Math.floor(Math.random() * selectedIconSetIcons.length)];

// Map availableIcons object to be used for the knobs addon
const typeOptions = iconSets.reduce((accumulator, iconSet) => {
  accumulator[availableIcons[iconSet].type] = iconSet;
  return accumulator;
}, {});

// Generate the stories
storiesOf('Icon', module)
  .add('with dynamic variables', () => (
    <Icon
      type={select('type', typeOptions, selectedIconSet)}
      icon={text('icon', selectedIcon)}
      size={number('size', 1)}
      color={text('color', '#333333')}
    />
  ));