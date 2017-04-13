import controller from './emojiList.controller';
const templateUrl = 'app/emojiList/emojiList.html';

const route = function route($stateProvider) {
  $stateProvider
    .state('emojiList', {
      url: '/',
      templateUrl,
      controller,
      controllerAs: 'vm'
    });
};

route.$inject = ['$stateProvider'];

export default route;
