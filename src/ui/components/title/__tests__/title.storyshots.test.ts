
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^ui\.components\.title$/,
};

initStoryshots(options);
