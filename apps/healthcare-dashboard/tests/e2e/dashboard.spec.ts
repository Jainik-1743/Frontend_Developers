import { test, expect } from "@playwright/test";

test("homepage loads and clinical pathway renders", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Monitor patients, visualize telemetry/i,
    }),
  ).toBeVisible();

  await expect(page.getByTestId("clinical-pathway-flow")).toBeVisible();
});
