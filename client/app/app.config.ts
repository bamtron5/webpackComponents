export const Config = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  (
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $stateProvider: ng.ui.IStateProvider
  ) => {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }];
