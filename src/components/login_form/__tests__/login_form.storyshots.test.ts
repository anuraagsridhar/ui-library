
import initStoryshots from '@storybook/addon-storyshots';

const options = {
  configPath: '.storybook',
  storyKindRegex: /^ui\.components\.login_form$/,
};

initStoryshots(options);
