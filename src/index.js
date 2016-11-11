var angular = require('angular');

// libs
require('jquery');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-animate');
require('angular-toastr');

// config
var routesConfig = require('./routes');

// views
var main = require('./app/views/main/main');

// components
var testcase = require('./app/components/testcase/testcase');
var operation = require('./app/components/operation/operation');
var opInput = require('./app/components/op-input/op-input');
var responseModal = require('./app/components/response-modal/response-modal');
var instructionsModal = require('./app/components/instructions-modal/instructions-modal');

// styles
require('bootstrap/dist/css/bootstrap.css');
require('angular-toastr/dist/angular-toastr.css');
require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ui.bootstrap', 'ngAnimate', 'toastr'])
  .config(routesConfig)

  // views
  .component('main', main)

  // components
  .component('riTestcase', testcase)
  .component('riOperation', operation)
  .component('riOpInput', opInput)
  .component('riResponseModal', responseModal)
	.component('riInstructionsModal', instructionsModal);
