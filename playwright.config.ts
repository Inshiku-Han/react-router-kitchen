import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const PORT = process.env.PORT || '3000';

export default defineConfig({
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
			},
		},
	],
	reporter: 'html',
	retries: process.env.CI ? 2 : 0,
	testDir: './tests/e2e',
	use: {
		baseURL: `http://localhost:${PORT}`,
		trace: 'on-first-retry',
	},
	webServer: {
		command: process.env.CI ? 'npm run start' : 'npm run dev',
		env: {
			PORT,
		},
		port: Number(PORT),
		reuseExistingServer: true,
		stderr: 'pipe',
		stdout: 'pipe',
	},
	workers: process.env.CI ? 1 : undefined,
});
