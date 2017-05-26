function RecordController($timeout){
  var controller = this;
  controller.canStart = false;
  controller.startSound = false;

  controller.startMusic = false;


  controller.toggleStart = function() {
    controller.canStart = !controller.canStart;
    controller.startSound = !controller.startSound;


    $timeout(function () {
      controller.startMusic = !controller.startMusic;
    }, 200);



  };



  function init() {

  }


  init();
}

RecordController.$inject = ['$timeout'];


angular
  .module('PortfolioApp')
  .controller('RecordController', RecordController);
