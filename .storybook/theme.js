import { create } from '@storybook/theming/create';
import { typography, color } from '@storybook/theming';

const theme = create({
  base: 'dark',

  // Storybook specific color palette
  colorPrimary: '#FF4785', // coral
  colorSecondary: '#1EA7FD', // ocean

  // UI
  appBg: '#232323',
  appContentBg: '#565656',
  appBorderColor: '#DDDDDD',
  appBorderRadius: 10,

  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,

  // Text colors
  textColor: color.lightest,
  textInverseColor: color.darkest,

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: color.secondary,
  barBg: color.darkest,

  // Form colors
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: color.lightest,
  inputBorderRadius: 4,
});

export default theme;
