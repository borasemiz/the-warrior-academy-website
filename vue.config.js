const path = require('path');

module.exports = {
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/abstracts/_variables.scss'),
        path.resolve(__dirname, './src/assets/styles/abstracts/_mixins.scss')
      ]
    }
  }
}
