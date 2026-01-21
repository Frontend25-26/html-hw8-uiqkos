import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3030',
    trace: 'on',
    screenshot: 'on',
    viewport: { width: 390, height: 770 },
  },
  webServer: {
    command: 'npx vite',
    url: 'http://localhost:3030',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  snapshotPathTemplate: '{testDir}/__screenshots__/{testName}{ext}',
})
