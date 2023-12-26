const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: " /orangeHRM/reports/mochareports/screenshots",
  downloadsFolder: "orangeHRM/downloads",
  fixturesFolder: "orangeHRM/fixtures",
  numTestsKeptInMemory: 10,
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
    supportFile: "orangeHRm/support/e2e.js",
  },
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "orangeHRM/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "embeddedScreenshots": true,
    }
  },
  env: {
    userName: "admin",
    password: "admin123"
  },

});
