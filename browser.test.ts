import { test } from "@playwright/test";
test("test browser" , async({page}) => {
    await page.goto("https://google.com/");
    await page.pause();
});