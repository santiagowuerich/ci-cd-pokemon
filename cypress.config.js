const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // keep existing integration folder used in this project
    specPattern: 'cypress/integration/**/*.js',
    supportFile: false
  }
})
 