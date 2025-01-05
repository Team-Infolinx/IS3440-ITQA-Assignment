// cypress.config.js
require("dotenv").config(); // Load environment variables from .env

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { allureCypress } = require("allure-cypress/reporter");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Setup Allure Reporter
  allureCypress(on, config);

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    baseUrl: process.env.CYPRESS_baseUrl,
    baseUrlAPI: process.env.CYPRESS_baseUrlAPI,
    chromeWebSecurity: false,
    env: {
      allureResultsPath: process.env.CYPRESS_allureResultsPath,
    },
  },
});
