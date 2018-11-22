
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^components\.title$/,
};

initStoryshots(options);
