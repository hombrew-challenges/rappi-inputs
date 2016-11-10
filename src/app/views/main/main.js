var angular = require('angular');

module.exports = {
  template: require('./main.html'),
  controllerAs: 'mn',
  controller: MainController
};

MainController.$inject = [
  '$scope',
  'toastr',
  '$http',
  '$uibModal',
  '$log'
];
/**
 * Main Component Controller.
 * @param {$scope} $scope: this controller scope.
 * @param {service} toastr: notifications service.
 * @param {service} $http: angular default requests service.
 * @param {services} $translate: angular-translate service.l.
 * @return void.
 */
function MainController($scope, toastr, $http, $uibModal, $log) {
  var mn = this;

  // services
  mn.toastr = toastr;
  mn.$http = $http;
  mn.$uibModal = $uibModal;
  mn.$log = $log;

  // view model
  mn.testcaseQuantity = 1;
  mn.testcases = [];
  mn.disabledSubmit = false;

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

  /**
   * Testcases information submit.
   * verifies if all form data is valid, then sends it.
   * @return void.
   */
  submit: function () {
    var aux = true;
    var mn = this;
    if (angular.isUndefined(this.testcaseQuantity) ||
        this.testcaseQuantity === null ||
        this.testcaseQuantity < 1) {
      aux = false;
    }

    this.testcases.forEach(function (currentTestcase) {
      if (angular.isUndefined(currentTestcase.n) ||
          currentTestcase.n === null) {
        aux = false;
      }
      if (angular.isUndefined(currentTestcase.m) ||
          currentTestcase.m === null) {
        aux = false;
      }
      currentTestcase.operations.forEach(function (currentOperation) {
        if (currentOperation.search('undefined') !== -1 ||
            currentOperation.search('null') !== -1) {
          aux = false;
        }
      });
    });

    if (aux === false) {
      this.toastr.warning('Complete todos los campos del formulario para poder continuar', 'Advertencia');
    } else {
      this.disabledSubmit = true;
      this.$http
        .post('http://rappi-matrix.herokuapp.com/api/testcases', {testcases: mn.testcases})
        .then(
          function (response) {
            mn.disabledSubmit = false;
            angular.element('.loader').css('opacity', 0);

            var modalInstance = mn.$uibModal.open({
              animation: true,
              component: 'riModal',
              resolve: {
                results: function () {
                  return response.data;
                }
              }
            });

            // start again
            modalInstance.result.then(function () {
              mn.testcaseQuantity = 1;
              mn.testcases = [];
              mn.testcases.push({n: 1, m: 1, operations: ['UPDATE 1 1 1 0']});
            });

            mn.$log.log(mn.disabledSubmit);
          },

          function () {
            mn.disabledSubmit = false;
            // mn.toastr.error(error, 'Error');
          }
        );
      this.$log.log(mn.disabledSubmit);
    }
  }
};
