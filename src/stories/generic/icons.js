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
action('Available Icons')('http://react-icons.github.io/react-icons/');
action('Available Icons')(availableIcons);

// Select random Icon
const iconSets = Object.keys(availableIcons);

// Generate list of all icons to be used for the knobs addon
const allIconOptions = iconSets.map(iconSetName => {
  const iconSet = availableIcons[iconSetName];
  return iconSet.icons.map(icon => `${iconSet.type} - ${icon}`)
})
.flat();

// Generate the stories
storiesOf('Generic|Icons', module)
  .add('Default', () => {
    let selectedIcon = select('icon', allIconOptions, selectedIcon);
    if (!selectedIcon) {
      selectedIcon = allIconOptions[Math.floor(Math.random() * allIconOptions.length)];
    }
    const [type, icon] = selectedIcon.split(' - ');

    return (
      <Icon
        type={type}
        icon={icon}
        size={number('size', 2)}
        color={text('color')}
      />
    );
  });