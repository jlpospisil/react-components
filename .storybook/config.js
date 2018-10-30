import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

// Storybook options
setOptions({
  name: 'React Components',
  sortStoriesByKind: true,
  addonPanelInRight: true,
  selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  // theme: {
  //   mainBackground: 'red',
  //   mainBorder: 'red',
  //   mainBorderColor: 'red',
  //   mainBorderRadius: 'red',
  //   mainFill: 'red',
  //   barFill: 'red',
  //   inputFill: 'red',
  //   mainTextFace: 'red',
  //   mainTextColor: 'red',
  //   mainTextSize: 'red',
  //   dimmedTextColor: 'red',
  //   highlightColor: 'red',
  //   successColor: 'red',
  //   failColor: 'red',
  //   warnColor: 'red',
  //   monoTextFace: 'red',
  //   layoutMargin: 'red',
  //   overlayBackground: 'red',
  // }
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
