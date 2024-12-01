import type { StorybookConfig } from '@storybook/react-vite';

export default {
	addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-vite',
		options: {
			builder: {
				viteConfigPath: './.storybook/vite.config.ts',
			},
		},
	},
	stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
} satisfies StorybookConfig;
