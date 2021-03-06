function PortfolioController($scope, $location, $anchorScroll){
  var controller = this;
  controller.navAni = false;

  controller.toggleNav = function() {
    controller.navAni = !controller.navAni;
  };

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
  };

  controller.portfolioData = [
    {
      title: 'Beating Heart',
      img: '/port-main/beating-heart_wv0qzi_c_scale,w_626.png',
      anchor: 'beating-heart',
      tags: ['Low-Poly','SVG','Animation'],
      desc: 'Beating Heart was created in illustrator. This low-poly animation is made up of hundreds of svg elements animated using CSS only to create the illusion of a beating heart. This project has been well recieved by the community with over 20,000 views on copepen and featured in a codrops collective',
      codepen: 'https://codepen.io/morkett/full/VjByYj/',
      github: 'https://github.com/morkett/BeatingHeart',
      codedrops: 'https://tympanus.net/codrops/collective/collective/'
    },
    {
      title: 'Sketch',
      img: '/port-main/sketch.png',
      anchor: 'sketch',
      tags: ['Canvas', 'CSS', 'JS'],
      desc: 'This canvas project is influenced by Microsoft Paint & Photoshop. It\'s intended use is to allow the user to draw on the canvas, with an array of tools such as background fill, spray can, paint brush. The tools all have opacity and size options. The Save and Delete tools allow the user to save and delete their image to/from local storage.',
      github: 'https://github.com/morkett/sketch',
      codepen: 'https://codepen.io/morkett/full/MvgWdL/'
    },
    {
      title: 'Your Movies',
      img: '/port-main/movie.png',
      anchor: 'movies',
      tags: ['rMVC', 'API', 'AngularJs', 'NodeJs', 'SPA'],
      desc: 'This single page application allows users to create an account, browse through movie collections ranging from those in theatre to movies by category, and also allows users the to look up similar movies. This project is a MEAN app that uses an MVC approach and utilises HTTP requests. It is built with Node/Express server-side, and AngularJS client-side working with an external API.',
      github: 'https://github.com/morkett/sg-project-3',
      site: 'https://david-sg-project-3.herokuapp.com/#/'
    },
    {
      title: 'Record Player',
      img: '/port-main/recordplayer.png',
      anchor: 'record-player',
      tags: ['Music Player','AngularJs', 'JS', 'Animation'],
      desc: 'this project is a prototype of a working record player and was originally created using html, css, js and jquery. css animations were used to transition any movements. The project was refactored to work using angular resulting in jquery being removed from the code.',
      codepen: 'https://codepen.io/morkett/full/oBdadK/',
      github: 'https://github.com/morkett/Record-Player'
    },
    {
      title: 'Space Shooter Game',
      img: '/port-main/game.png',
      anchor: 'game',
      tags: ['Game', 'JS', 'Animation', 'jQuery'],
      desc: 'this project was created using html, css, js and jquery. css animations were used to transition any movements. Javascript was used to control behaviours and events of the app such as sounds and scores',
      github: 'https://github.com/morkett/sg-project-1',
      site: 'https://dcorkett-sg-project-1.herokuapp.com/app/'
    },
    {
      title: 'Realtime Clock',
      img: '/port-main/clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'realtime-clock',
      tags: ['Realtime Clock', 'JS', 'Animation'],
      desc: 'this project was originally created using html, css, js and jquery. css animations were used to transition any movements. Javascript and jquery were used to create a working clock based on the users local time. The project was rewritten in angular and has been used as a tutorial tool for teaching new students.',
      codepen: 'https://codepen.io/morkett/full/GrgYpK/',
      github: 'https://github.com/morkett/Realtime-Clock'
    },
    {
      title: 'Down To Earth',
      img: '/port-main/BROWSER-MOCKUP-resize.png',
      anchor: 'd2e',
      tags: ['Responsive', 'Website', 'Angular'],
      desc: 'designed to brief in adobe photoshop, this website reflects the cafes atmosphere and ethos. this website was hand-coded to create a responsive interface, enhanced with the inclusion of css animations and creating behaviours through jquery.',
      site: 'http://down-to-earth.davidcorkett.com/'
    }
  ];

  controller.navAniFalse = function() {
    controller.navAni = false;
  };

  function init() {
  }

  init();
}

PortfolioController.$inject = ['$scope', '$location', '$anchorScroll', '$state'];


angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
