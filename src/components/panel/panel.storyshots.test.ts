
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^components\.panel$/,
};

initStoryshots(options);
