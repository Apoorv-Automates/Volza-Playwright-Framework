import { test, expect } from "@playwright/test";

test('Step 1: Verify Volza Logo' , async ({ page }) => {

    await page.goto('https://www.volza.com');

    const logo = page.getByRole('link', { name: /volza/i }).first();

    await expect(logo) .toBeVisible();

    console.log("Success: The Volza logo is visible!");
        });