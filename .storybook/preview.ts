import { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile1: {
          name: 'Galaxy S5 (Small mobile)',
          styles: {
            height: '640px',
            width: '360px',
          },
          type: 'mobile',
        },
        mobile2: {
          name: 'Galaxy S10',
          styles: {
            height: '760px',
            width: '360px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'iPad Pro 10,5-in (Tablet)',
          styles: {
            height: '1112px',
            width: '834px',
          },
          type: 'tablet',
        },
        laptop: {
          name: 'Laptop',
          styles: {
            height: '768px',
            width: '1366px',
          },
          type: 'tablet',
        },
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Containers', 'Pages', 'Utilities'],
      },
    },
  },
};

export default preview;
