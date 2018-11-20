
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^ui\.components\.text_input$/,
};

initStoryshots(options);
