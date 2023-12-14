const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": false,
      "overwrite": true,
      "html": false,
      "json": true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
});
