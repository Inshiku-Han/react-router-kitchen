import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
	const [response] = await Promise.all([
		page.waitForNavigation(),
		page.goto('/'),
	]);

	expect(response?.url()).toContain('/login');
});
