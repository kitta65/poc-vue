import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  const count = await page.getByText("find me!").count();
  expect(count).toBe(1);
});
