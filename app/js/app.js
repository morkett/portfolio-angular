function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@home': {templateUrl: '/states/partials/home/aside.html'},

        'main-content@home': {templateUrl: '/states/partials/home/main.html'}
      }
    })
    .state('portfolio', {
      url: '/portfolio',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio': {templateUrl: '/states/partials/portfolio/main/aside.html'},

        'main-content@portfolio': {templateUrl: '/states/partials/portfolio/main/main.html'}
      }
    })
    .state('about', {
      url: '/about',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@about': {templateUrl: '/states/partials/about/aside.html'},

        'main-content@about': {templateUrl: '/states/partials/about/main.html'}
      }
    });









  $urlRouterProvider.otherwise('/portfolio');
}


angular
.module('PortfolioApp', ['ui.router','ngMaterial'])
.config(MainRouter);
