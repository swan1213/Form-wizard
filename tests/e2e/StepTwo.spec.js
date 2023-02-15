import puppeteer from "puppeteer";

describe("StepTwo.vue", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("Should show proper price", async () => {
    await page.goto("http://localhost:3000/step-1");
    await page.click("a.block");

    await page.waitForSelector("input.name");
    await page.type("input.name", "Chheung");
    await page.type("input.age", "10");
    await page.select(".country", "0");
    await page.click('input[value="0"]');

    await page.waitForSelector("h2");
    const text = await page.$eval("#premium-price", (e) => e.textContent);
    expect(text).toContain("Your premium is 100 HKD");
  });

  afterAll(() => browser.close());
});
