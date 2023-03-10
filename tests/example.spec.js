// @ts-check
const { test, expect } = require("@playwright/test");

// test.beforeEach(async ({ page }) => {
// 	await page.goto("https://admin.iwhbyd.com/login");
// });

test("should show required if one of the form field is empty", async ({
	page,
	baseURL,
}) => {
	await page.goto("/login");
	const email = await page.getByPlaceholder("Enter email address");
	const password = await page.getByPlaceholder("Enter Password");
	const button = await page.getByTestId("sign-in-btn");

	// Expect a title "to contain" a substring.
	await email.fill("varun.r@mtechzilla.com");
	await password.fill("");
	await button.click();

	const errorMessage = await page.getByText("Required");

	await expect(errorMessage).toBeVisible();
});

test("should throw error of invalid auth", async ({ page }) => {
	await page.goto("/login");
	const email = await page.getByPlaceholder("Enter email address");
	const password = await page.getByPlaceholder("Enter Password");
	const button = await page.getByTestId("sign-in-btn");

	await email.fill("varun.r@mtechzilla.com");
	await password.fill("234324");
	await button.click();

	await expect(page.getByText("Email/Password is not valid")).toBeVisible();
});
