var angular = require('angular');

module.exports = {
  template: require('./main.html'),
  controllerAs: 'mn',
  controller: MainController
};

MainController.$inject = [
  '$scope',
  '$log'
];
function MainController($scope, $log) {
  var mn = this;

  // services
  mn.$log = $log;

  // view model
  mn.testcaseQuantity = 1;
  mn.testcases = [];

  $scope.$watch('mn.testcaseQuantity', function (next, prev) {
    var i;

    if (angular.isUndefined(prev) || next === prev) {
      for (i = 0; i < next; i++) {
        mn.testcases.push({n: 1, m: 1, operations: []});
      }
    } else if (next > prev) {
      var aux = next - prev;
      for (i = 0; i < aux; i++) {
        mn.testcases.push({n: 1, m: 1, operations: []});
      }
    } else if (next < prev) {
      mn.testcases.splice(next, prev - next);
    }
  });
}

MainController.prototype = {
  submit: function () {
    this.$log.log(this.testcases);
  }
};
