var angular = require('angular');
require('angular-utils-pagination');
MODULE_NAME = 'base-mongo';

angular.module(MODULE_NAME, ['angularUtils.directives.dirPagination'])
  .config(['$interpolateProvider', function($interpolateProvider) {
	  $interpolateProvider.startSymbol('{[');
	  $interpolateProvider.endSymbol(']}');
	}]);

require('./controllers/home');
require('./controllers/init');
