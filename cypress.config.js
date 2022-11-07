/* global _:readonly */

require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: 'http://localhost:5500/',
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
