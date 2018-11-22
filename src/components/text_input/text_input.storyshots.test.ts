
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^components\.text_input$/,
};

initStoryshots(options);
