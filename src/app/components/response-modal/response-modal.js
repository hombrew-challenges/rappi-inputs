module.exports = {
  template: require('./response-modal.html'),
  controllerAs: 'rm',
  controller: ResponseModalController,
  bindings: {
    resolve: '<',
    close: '&',
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

  ok: function () {
    this.close();
  },

  cancel: function () {
    this.dismiss();
  }
};
