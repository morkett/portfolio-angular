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






  $urlRouterProvider.otherwise('/home');
}


angular
.module('PortfolioApp', ['ui.router'])
.config(MainRouter);
