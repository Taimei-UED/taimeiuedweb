import type { Config } from 'tailwindcss';
import {
  tailwindColors,
  tailwindBorderRadius,
  tailwindBoxShadow,
} from './design-system/tokens';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './design-system/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{mdx,md}',
    './lib/**/*.{js,ts}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      // ✅ 所有颜色来自 design-tokens.json
      colors: {
        primary: tailwindColors.primary,
        accent: tailwindColors.accent,
        neutral: tailwindColors.neutral,
        success: tailwindColors.success,
        warning: tailwindColors.warning,
        danger: tailwindColors.danger,
        white: tailwindColors.white,
      },
      // ✅ 圆角来自 tokens
      borderRadius: tailwindBorderRadius,
      // ✅ 阴影来自 tokens
      boxShadow: tailwindBoxShadow,
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
