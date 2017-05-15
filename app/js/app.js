function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
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
    .state('portfolio-beating-heart', {
      url: '/portfolio/beating-heart',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-beating-heart': {templateUrl: '/states/partials/portfolio/heart/aside.html'},

        'main-content@portfolio-beating-heart': {templateUrl: '/states/partials/portfolio/heart/heart.html'}
      }
    })
    .state('portfolio-movies', {
      url: '/portfolio/movies',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-movies': {templateUrl: '/states/partials/portfolio/movies/aside.html'},

        'main-content@portfolio-movies': {templateUrl: '/states/partials/portfolio/movies/movies.html'}
      }
    })
    .state('portfolio-realtime-clock', {
      url: '/portfolio/realtime-clock',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-realtime-clock': {templateUrl: '/states/partials/portfolio/clock/aside.html'},

        'main-content@portfolio-realtime-clock': {templateUrl: '/states/partials/portfolio/clock/clock.html'}
      }
    })
    .state('portfolio-d2e', {
      url: '/portfolio/down-to-earth',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-d2e': {templateUrl: '/states/partials/portfolio/d2e/aside.html'},

        'main-content@portfolio-d2e': {templateUrl: '/states/partials/portfolio/d2e/d2e.html'}
      }
    })
    .state('portfolio-record-player', {
      url: '/portfolio/record-player',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-record-player': {templateUrl: '/states/partials/portfolio/record-player/aside.html'},

        'main-content@portfolio-record-player': {templateUrl: '/states/partials/portfolio/record-player/record.html'}
      }
    })
    .state('portfolio-game', {
      url: '/portfolio/game',
      views: {
        '': {templateUrl: '/states/template.html'},
        'aside@portfolio-game': {templateUrl: '/states/partials/portfolio/game/aside.html'},

        'main-content@portfolio-game': {templateUrl: '/states/partials/portfolio/game/game.html'}
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








  // $locationProvider.html5Mode(true);
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  $urlRouterProvider.otherwise('/portfolio');
}


angular
.module('PortfolioApp', ['ui.router','ngMaterial'])
.config(MainRouter);
