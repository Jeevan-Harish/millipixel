const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout : 30000,
    defaultCommandTimeout : 10000,
    
    env: {
      username: "alexmurphywork@gmail.com",
      password: "Password1!",
    },
    
    video: true,
    videosFolder: 'cypress/videos',
    failOnStatusCode: false,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require ('./cypress/plugins/index.js')(on, config)
    },
  },
});