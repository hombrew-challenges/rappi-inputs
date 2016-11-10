var angular = require('angular');

module.exports = {
  template: require('./testcase.html'),
  controllerAs: 'tc',
  controller: TestcaseController,
  bindings: {
    testcase: '=',
    index: '<'
  }
};

TestcaseController.$inject = [
  '$scope'
];
function TestcaseController($scope) {
  var tc = this;

  // view model
  // tc.testcase.m = 1;

  $scope.$watch('tc.testcase.m', function (next, prev) {
    var i;

    if (angular.isUndefined(prev) || next === prev) {
      for (i = 0; i < next; i++) {
        tc.testcase.operations.push('');
      }
    } else if (next > prev) {
      var aux = next - prev;
      for (i = 0; i < aux; i++) {
        tc.testcase.operations.push('');
      }
    } else if (next < prev) {
      tc.testcase.operations.splice(next, prev - next);
    }
  });
}
