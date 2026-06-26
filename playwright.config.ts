/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/pratices_Playwright',

  // grep:/@sanity/,
  // grepInvert:/@regression/,

  //default timeout for entire test
  timeout: 25000,  //32sec       //By Gok's
  //default assertion  timeout for entire test
  expect: { timeout: 6789 },    //By Gok's


  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,

  /* Retry on manually when test get failed */
  // retries: 4,

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,  //By Gok's
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
// reporter: 'line'
// reporter: 'dot',


  reporter: [
    ['html', { open: 'always', outputFolder: './Failure_Reports' }],  //By Gok's
    // ['list'],  //By Gok's
    // ['junit', { outputFile: 'test-results/results.xml' }],  //By Gok's
    // ['json', { outputFile: 'test-results/results.json' }],  //By Gok's
  ],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {


    //Screenshots
    screenshot: 'only-on-failure',   //By Gok's
    // video: 'retain-on-failure',    //By Gok's


    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',  //By Gok's


    testIdAttribute: 'data-pw',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
