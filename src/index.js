var angular = require('angular');

// views
var main = require('./app/views/main/main');

// components
var testcase = require('./app/components/testcase/testcase');
// routes
var routesConfig = require('./routes');

require('angular-ui-router');

// styles
require('bootstrap/dist/css/bootstrap.css');
require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)

  // views
  .component('main', main)

  // components
  .component('riTestcase', testcase);
