import * as angular from 'angular';
import controller from './emojiModal.controller';

export default angular.module('app.emojiModal', [])
  .component('emojiModal', {
    templateUrl: 'app/emojiModal/emojiModal.html',
    controller,
    controllerAs: 'vm',
    bindings: {
      resolve: '<',
      modalInstance: '&',
      close: '&'
    }
  })
  .name;
