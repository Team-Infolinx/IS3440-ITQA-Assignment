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

  allureCypress(on, config);

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    baseUrlAPI: "http://api-server:7081",  // Use Docker service name here
    chromeWebSecurity: false,
    env: {
      allureResultsPath: "cypress/results/allure",
    },
  },
});
