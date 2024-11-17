const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      video: true; // Habilitar grabación de video
      videoCompression: 32;
      videoUploadOnPasses: true;
    },
  },
});
