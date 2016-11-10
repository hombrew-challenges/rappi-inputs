module.exports = {
  template: require('./operation.html'),
  controllerAs: 'op',
  controller: OperationController,
  bindings: {
    operation: '=',
    n: '=',
    tcindex: '<',
    opindex: '<'
  }
};

OperationController.$inject = [];
/**
 * Operation Component Controller.
 * @return void.
 */
function OperationController() {
  var op = this;

  // op.$log = $log;
  // view model
  op.activeOption = 'UPDATE';
  op.placeholders = ['x', 'y', 'z', 'W'];
  op.value = [1, 1, 1, 0];
  op.changeCurrentOperation = changeCurrentOperation;
  // $log.log('epale');

  function changeCurrentOperation() {
    var i;
    op.operation = op.activeOption;
    for (i = 0; i < op.value.length; i++) {
      op.operation += ' ' + op.value[i];
    }
  }
}

/**
 * OperationController Methods.
 * @return void.
 */
OperationController.prototype = {

  changeActiveOption: function (option) {
    this.activeOption = option;
    if (this.activeOption === 'UPDATE') {
      this.placeholders = ['x', 'y', 'z', 'W'];
      this.value = [1, 1, 1, 0];
    } else {
      this.placeholders = ['x1', 'y1', 'z1', 'x2', 'y2', 'z2'];
      this.value = [1, 1, 1, 1, 1, 1];
    }

    this.changeCurrentOperation();
  }
};
