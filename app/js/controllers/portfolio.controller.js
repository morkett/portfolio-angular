function PortfolioController($scope, $location, $anchorScroll, $state){
  var controller = this;

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
    console.log('button hit for scrollTo');
  };

// controller.anchor = function() {
//   $state.go('portfolio?beating-heart');
// };
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
      title: 'Realtime Clock',
      img: 'clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'realtime-clock',
      tags: ['Realtime Clock', 'JS', 'Animation'],
      desc: 'this project was created using html, css, js and jquery. css animations were used to transition any movements, it utilises js, jquery to create a working clock based on the users local time. this project has been used as a tutorial tool for teaching new students.',
      codepen: 'https://codepen.io/morkett/full/GrgYpK/',
      github: 'https://github.com/morkett/Realtime-Clock'
    },
    {
      title: 'Space Shooter Game',
      img: 'clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'game'
    },
    {
      title: 'Record Player',
      img: 'recordplayer.png',
      anchor: 'record-player',
      tags: ['Music Player', 'JS', 'Animation'],
      desc: 'this project was created using html, css, js and jquery. css animations were used to transition any movements, it utilises js, jquery to create a working record player.',
      codepen: 'https://codepen.io/morkett/full/oBdadK/',
      github: 'https://github.com/morkett/Record-Player'
    },
    {
      title: 'Down To Earth',
      img: 'BROWSER-MOCKUP.png',
      anchor: 'd2e',
      tags: ['Responsive', 'Website'],
      desc: 'designed to brief in adobe photoshop, this website reflects the cafes atmosphere and ethos. this website was hand-coded to create a responsive interface, enhanced with the inclusion of css animations and creating behaviours through jquery.',
      site: 'site'
    }
  ];

  function init() {

  }


  init();
}



angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
