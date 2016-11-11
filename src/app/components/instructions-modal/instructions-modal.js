module.exports = {
  template: require('./instructions-modal.html'),
  controllerAs: 'rm',
  controller: InstructionsModalController,
  bindings: {
    resolve: '<',
    close: '&',
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

  ok: function () {
    this.close();
  },

  cancel: function () {
    this.dismiss();
  }
};
