import type { Preview } from '@storybook/react';
import '../src/styles/global.css';
import { applyTheme } from '../src/tokens/themes/applyTheme';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Active theme mode',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' }
        ]
      }
    },
    brand: {
      description: 'Active brand collection',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'core', title: 'Core' }
        ]
      }
    }
  },
  initialGlobals: {
    theme: 'light',
    brand: 'core'
  },
  decorators: [
    (Story, context) => {
      applyTheme({
        theme: String(context.globals.theme ?? 'light'),
        brand: String(context.globals.brand ?? 'core')
      });
      return Story();
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    docs: {
      toc: true
    },
    options: {
      storySort: {
        order: ['Welcome', 'Foundations', 'Tokens', 'Components', 'Templates', 'Experiment', 'Changelog']
      }
    }
  }
};

export default preview;
