import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  reporter: 'spec',

  e2e: {
    baseUrl: 'https://www.saucedemo.com',

    specPattern: 'cypress/e2e/**/*.feature',

    async setupNodeEvents(on, config) {
      console.log('CYPRESS ENV:', config.env);

      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});