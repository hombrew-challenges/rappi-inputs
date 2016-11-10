var angular = require('angular');

// libs
require('angular-ui-router');
require('angular-ui-bootstrap');

// views
var main = require('./app/views/main/main');

// components
var testcase = require('./app/components/testcase/testcase');
var operation = require('./app/components/operation/operation');
var opInput = require('./app/components/op-input/op-input');

// routes
var routesConfig = require('./routes');

// styles
require('bootstrap/dist/css/bootstrap.css');
require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ui.bootstrap'])
  .config(routesConfig)

  // views
  .component('main', main)

  // components
  .component('riTestcase', testcase)
  .component('riOperation', operation)
  .component('riOpInput', opInput);
