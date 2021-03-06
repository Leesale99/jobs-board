import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider, injectGlobal } from 'styled-components';

// Global Styles
injectGlobal`
html {
  font-size: 62.5%;
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #686868;
}

*, ::before, ::after {
  box-sizing: inherit;
}

:root {
  --space1: 0.9rem;
  --space2: 1.8rem;
  --space3: 3.6rem;
  --space4: 4.5rem;
  --space5: 7.2rem;
}
`;

function loadStories() {
  require('../src/stories');
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
