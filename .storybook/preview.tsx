import type { Preview } from '@storybook/react'
import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import messages from '../src/locales/en.json'
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => (
    <MemoryRouter>
      <IntlProvider locale='en' messages={messages}><Story /></IntlProvider>
    </MemoryRouter>
  )]
};

export default preview;