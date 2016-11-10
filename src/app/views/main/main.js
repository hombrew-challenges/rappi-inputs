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
  '$log'
];
function MainController($scope, toastr, $http, $log) {
  var mn = this;

  // services
  mn.toastr = toastr;
  mn.$http = $http;
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
      this.$http
        .post('http://rappi-matrix.herokuapp.com/api/testcases', {testcases: mn.testcases})
        .then(
          function (response) {
            mn.results = response.data;
            mn.showResults = true;
            mn.toastr.success('Comunicación realizada exitosamente');
          },
          function (error) {
            mn.toastr.error(error, 'Error');
          }
        );
    }
  }
};
