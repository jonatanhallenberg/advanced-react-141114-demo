import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 6000,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
