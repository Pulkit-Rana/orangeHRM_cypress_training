const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,

  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: "orangeHRM/screenshots",
  downloadsFolder: "orangeHRM/downloads",
  fixturesFolder: "orangeHRM/fixtures",
  numTestsKeptInMemory: 1,
  video: true,
  videosFolder: "orangeHRM/videos",
  videoCompression: 50,
  retries: {
    "runMode": 2,
    "openMode": 3
  },
  defaultCommandTimeout: 7000,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    specPattern: "orangeHRM/specFiles/**/*",
    supportFile: "orangeHRm/support/e2e.js"
  },
  env: {
    userName: "admin",
    password: "admin123"
  }
})
