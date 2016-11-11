module.exports = {
  template: require('./instructions-modal.html'),
  controllerAs: 'rm',
  controller: InstructionsModalController,
  bindings: {
    dismiss: '&'
  }
};

/**
 * Instructions Modal Component Controller.
 * @return void.
 */
function InstructionsModalController() {
}

InstructionsModalController.prototype = {

  cancel: function () {
    this.dismiss();
  }
};
