import { defineConfig } from 'playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },
});
