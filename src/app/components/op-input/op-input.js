module.exports = {
  template: require('./op-input.html'),
  controllerAs: 'oi',
  controller: OperationInputController,
  bindings: {
    placeholder: '<',
    n: '<',
    value: '=',
    changecurrentoperation: '='
  }
};

OperationInputController.$inject = ['$scope'];
/**
 * Operation Input Component Controller.
 * @return void.
 */
function OperationInputController($scope) {
  var oi = this;

  $scope.$watch('oi.value', function () {
    oi.changecurrentoperation();
  });

  $scope.$watch('oi.n', function (next) {
    if (oi.value > next && oi.placeholder !== 'W') {
      oi.value = next;
    }
  });
}
