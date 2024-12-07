import { expect, test } from '@playwright/test';

test('Should success login', async ({ page }) => {
	await page.goto('/login');

	await page.fill('input[type=email]', 'example@example.com');
	await page.fill('input[type=password]', 'qwer1234');

	await page.click('button[type=submit]');

	await page.waitForFunction(() => window.location.pathname === '/cats');

	expect(page.locator('h2').getByText('Cats shop')).toBeTruthy();
});
