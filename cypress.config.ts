import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import mochawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://www.saucedemo.com',

    specPattern: 'cypress/e2e/**/*.feature',

   async setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  mochawesome(on);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
},
  }
});