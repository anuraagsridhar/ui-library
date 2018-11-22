
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^components\.login_form$/,
};

initStoryshots(options);
