function PortfolioController($scope, $location, $anchorScroll, $state){
  var controller = this;
  controller.navAni = false;

  controller.toggleNav = function() {
    controller.navAni = !controller.navAni;
    console.log(controller.navAni);
  };

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
    console.log('button hit for scrollTo');
  };

  controller.portfolioData = [
    {
      title: 'Beating Heart',
      img: 'beating-heart_wv0qzi_c_scale,w_626.png',
      anchor: 'beating-heart',
      tags: ['Low-Poly','SVG','Animation'],
      desc: 'Beating Heart was created in illustrator. This low-poly animation is made up of hundreds of svg elements animated using CSS only to create the illusion of a beating heart.',
      codepen: 'https://codepen.io/morkett/full/VjByYj/',
      github: 'https://github.com/morkett/BeatingHeart',
      codedrops: 'https://tympanus.net/codrops/collective/collective/'
    },
    {
      title: 'Your Movies',
      img: 'movie.png',
      anchor: 'movies',
      tags: ['rMVC', 'API', 'AngularJs', 'NodeJs'],
      desc: 'This App allows users to create an account and browse through movie collections ranging from those in theatre to movies by category, and gives users the ability to look up similar movies. This project is a MEAN app that uses a rMVC approach and utilises HTTP requests. It utilises Node/Express server-side, and AngularJS client-side and an external API to create a single page application',
      github: 'https://github.com/morkett/sg-project-3',
      site: 'https://david-sg-project-3.herokuapp.com/#/'
    },
    {
      title: 'Realtime Clock',
      img: 'clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'realtime-clock',
      tags: ['Realtime Clock', 'JS', 'Animation'],
      desc: 'this project was originally created using html, css, js and jquery. css animations were used to transition any movements, it utilised js, jquery to create a working clock based on the users local time. The project was rewritten in angular and has been used as a tutorial tool for teaching new students.',
      codepen: 'https://codepen.io/morkett/full/GrgYpK/',
      github: 'https://github.com/morkett/Realtime-Clock'
    },
    {
      title: 'Space Shooter Game',
      img: 'game.png',
      anchor: 'game',
      tags: ['Game', 'JS', 'Animation', 'jQuery'],
      desc: 'this project was originally created using html, css, js and jquery. css animations were used to transition any movements, it utilised js, jquery to create a working clock based on the users local time. The project was rewritten in angular and has been used as a tutorial tool for teaching new students.',
      github: 'https://github.com/morkett/sg-project-1',
      site: 'https://dcorkett-sg-project-1.herokuapp.com/app/'
    },
    {
      title: 'Record Player',
      img: 'recordplayer.png',
      anchor: 'record-player',
      tags: ['Music Player','AngularJs', 'JS', 'Animation'],
      desc: 'this project is a prototype of a working record player and was originally created using html, css, js and jquery. css animations were used to transition any movements. The project was refactored to work using angular resulting in jquery being  removed from the code.',
      codepen: 'https://codepen.io/morkett/full/oBdadK/',
      github: 'https://github.com/morkett/Record-Player'
    },
    {
      title: 'Down To Earth',
      img: 'BROWSER-MOCKUP-resize.png',
      anchor: 'd2e',
      tags: ['Responsive', 'Website'],
      desc: 'designed to brief in adobe photoshop, this website reflects the cafes atmosphere and ethos. this website was hand-coded to create a responsive interface, enhanced with the inclusion of css animations and creating behaviours through jquery.',
      site: 'http://localhost:3002/#/'
    }
  ];

  function init() {

  }


  init();
}

PortfolioController.$inject = ['$scope', '$location', '$anchorScroll', '$state'];


angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
