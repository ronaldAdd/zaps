const recipe = require('./triggers/sample1');

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  beforeRequest: [
  ],

  afterResponse: [
  ],

  resources: {
  },
  triggers: {
    [recipe.key]: recipe // new line of code
  },
  // ...
};

// Finally, export the app.
module.exports = App;