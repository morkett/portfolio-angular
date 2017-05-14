function PortfolioController($scope, $location, $anchorScroll, $mdSidenav, $log){
  var controller = this;

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
      desc: 'Beating Heart was created in illustrator. This low-poly animation is made up of hundreds of svg elements animated using CSS only to create the illusion of a beating heart.'
    },
    {
      title: 'Realtime Clock',
      img: 'clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'realtime-clock'
    },
    {
      title: 'Space Shooter Game',
      img: 'clock-3_fdlcsg_c_scale,w_941.png',
      anchor: 'game'
    },
    {
      title: 'Record Player',
      img: 'beating-heart_wv0qzi_c_scale,w_626.png',
      anchor: 'record'
    },
    {
      title: 'Down To Earth',
      img: 'Devices-Mockup_aon0qz_c_scale,w_546.png',
      anchor: 'd2e'
    }
  ];

  function init() {
    console.log(controller);

  }


  init();
}



angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
