import type { Config } from 'tailwindcss';
import { tokens } from './src/design-system/tokens';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.font,
      fontSize: tokens.fontSize,
      fontWeight: tokens.fontWeight,
      lineHeight: tokens.lineHeight,
      spacing: tokens.space,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      transitionTimingFunction: {
        DEFAULT: tokens.motion.ease,
      },
      transitionDuration: {
        fast: tokens.motion.fast,
        normal: tokens.motion.normal,
        slow: tokens.motion.slow,
      },
      width: {
        sidebar: tokens.layout.sidebarWidth,
        sidebarCollapsed: tokens.layout.sidebarCollapsed,
      },
      height: {
        header: tokens.layout.headerHeight,
      },
      maxWidth: {
        content: tokens.layout.maxContent,
      },
    },
  },
  plugins: [],
};

export default config;
