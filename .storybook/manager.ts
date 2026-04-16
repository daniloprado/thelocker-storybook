import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'The Locker 2.0',
    brandImage: '/thelocker-logo.svg'
  })
});
