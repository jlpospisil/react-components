import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import createTheme from './create-theme';

// Storybook options
setOptions({
  name: 'React Components',
  sortStoriesByKind: true,
  addonPanelInRight: true,
  selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  theme: createTheme({
    mainBackground: '#e0e0e0',
    inputFill: '#EEEEEE',
  }),
});

// Global decorators
addDecorator((getStory, context) => withInfo({ inline: true })(getStory)(context));
addDecorator(withKnobs);

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);
