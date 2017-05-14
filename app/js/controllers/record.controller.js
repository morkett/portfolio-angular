function RecordController($timeout){
  var controller = this;
  controller.canStart = false;
  controller.startSound = false;
  console.log('startSound',controller.startSound );

  controller.startMusic = false;
  console.log('startMusic',controller.startMusic );


  controller.toggleStart = function() {
    controller.canStart = !controller.canStart;
    controller.startSound = !controller.startSound;
    console.log('startSound',controller.startSound );


    $timeout(function () {
      controller.startMusic = !controller.startMusic;
      console.log('startMusic',controller.startMusic );
    }, 200);



  };



  function init() {

  }


  init();
}



angular
  .module('PortfolioApp')
  .controller('RecordController', RecordController);
