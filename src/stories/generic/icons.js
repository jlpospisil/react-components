import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as FA from 'react-icons/fa';
import * as MD from 'react-icons/md';
import * as Ion from 'react-icons/io';
import * as Typicons from 'react-icons/ti'
import * as GO from 'react-icons/go';
import * as Feather from 'react-icons/fi';
import { Icon } from '../../components/generic';

const availableIcons = {
  Feather: { type: 'Feather', icons: Object.keys(Feather).sort() },
  FontAwesome: { type: 'FontAwesome', icons: Object.keys(FA).sort() },
  'Github Octicons': { type: 'GO', icons: Object.keys(GO).sort() },
  Ionicons: { type: 'Ionicons', icons: Object.keys(Ion).sort() },
  MaterialDesign: { type: 'MaterialDesign', icons: Object.keys(MD).sort() },
  TypIcons: { type: 'TypIcons', icons: Object.keys(Typicons).sort() },
};

// Select random Icon
const iconSets = Object.keys(availableIcons);

// Generate list of all icons to be used for the knobs addon
const allIconOptions = iconSets.map(iconSetName => {
  const iconSet = availableIcons[iconSetName];
  return iconSet.icons.map(icon => `${iconSet.type} - ${icon}`)
})
.flat();

// Add not to show all available icons
const notes = `
## Uses react-icons
### http://react-icons.github.io/react-icons/
\`\`\`javascript
${JSON.stringify(availableIcons, null, 2)}
\`\`\`
`;

// Generate the stories
storiesOf('Generic|Icons', module)
  .add('Default',
    withMarkdownNotes(notes)(
    () => {
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
  }));