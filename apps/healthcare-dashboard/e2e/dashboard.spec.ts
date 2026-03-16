import { test, expect } from "@playwright/test";

test("has required main elements", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Healthcare Management/);

  // Expect dashboard header
  await expect(
    page.getByRole("heading", { name: "Executive Dashboard" }),
  ).toBeVisible();

  // Expect Clinical Pathway component
  const pathwayHeader = page.getByRole("heading", {
    name: "Clinical Pathway Workflow",
  });
  await expect(pathwayHeader).toBeVisible();
});
