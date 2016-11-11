module.exports = {
  template: require('./response-modal.html'),
  controllerAs: 'rm',
  controller: ResponseModalController,
  bindings: {
    dismiss: '&'
  }
};

/**
 * Response Modal Component Controller.
 * @return void.
 */
function ResponseModalController() {
}

ResponseModalController.prototype = {

  cancel: function () {
    this.dismiss();
  }
};
