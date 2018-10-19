import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// Storybook options
setOptions({
  name: 'React Components',
  sortStoriesByKind: true,
});

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);