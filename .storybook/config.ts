import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import * as fs from 'fs';
import * as path from 'path';

// Add knobs decorator, see https://github.com/storybooks/storybook-addon-knobs/issues/31
// Also the global knobs decorator fixes the issue of persistent values between stories
// see https://github.com/storybooks/storybook-addon-knobs/issues/55
addDecorator(withKnobs);

export const requireContext = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/): any => {
  // @ts-ignore
  if (typeof require.context !== 'undefined') {
    // @ts-ignore
    return require.context(base, scanSubDirectories, regularExpression);
  }

  const files: { [key: string]: boolean } = {};

  function readDirectory(directory: string) {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) {
          readDirectory(fullPath);
        }

        return;
      }

      if (!regularExpression.test(fullPath)) {
        return;
      }

      files[fullPath] = true;
    });
  }

  readDirectory(path.resolve(__dirname, base));

  const Module: any = (file: string) => {
    return require(file);
  };

  // @ts-ignore
  Module.keys = () => Object.keys(files);

  return Module;
};

// const req = requireContext('../src', true, /.stories\.tsx$/)
let req: any = null;
try {
  req = require.context('../src', true, /.stories\.tsx$/);
} catch (e) {
  // If require.context is undefined use our custom requireContext
  req = requireContext('../src', true, /.stories\.tsx$/);
}

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

// NOTE: This has to be called *AFTER* exposing the stories for Percy
setOptions({
  name: 'Anu UI library',
  downPanelInRight: true,
  hierarchySeparator: /\./,
});
