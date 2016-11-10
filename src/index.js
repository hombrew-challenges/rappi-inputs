var angular = require('angular');

// views
var hello = require('./app/views/main/hello');

// components

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
  .component('app', hello);
