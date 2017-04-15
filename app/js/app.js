function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/states/home.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: '/states/portfolio.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/states/about.html'
    });






  $urlRouterProvider.otherwise('/portfolio');
}


angular
.module('PortfolioApp', ['ui.router','ngMaterial'])
.config(MainRouter);
