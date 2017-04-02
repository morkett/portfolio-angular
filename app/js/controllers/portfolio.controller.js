function PortfolioController($scope, $location, $anchorScroll){
  var controller = this;

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
    console.log('button hit for scrollTo');
  };


  function init() {
    console.log(controller);

  }


  init();
}



angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
