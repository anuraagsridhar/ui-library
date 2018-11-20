
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^ui\.components\.button$/,
};

initStoryshots(options);
