function ClockController($interval){
  var controller = this;
  controller.startSound = false;

  controller.toggleStart = function() {
    controller.startSound = !controller.startSound;
  };


  controller.tick = function() {
    controller.date = new Date();
    controller.seconds = controller.date.getUTCSeconds();
    controller.minutes = controller.date.getUTCMinutes();
    controller.hours = controller.date.getUTCHours() + 1;
    controller.secondsHandAngle = controller.seconds * 6;
    controller.minutesHandAngle = controller.minutes * 6;
    controller.hoursHandAngle = (controller.hours * 30) + (controller.minutes * 0.5);

    controller.secondsHandStyle = {
      'transform': `rotate(${controller.secondsHandAngle}deg)`
    };
    controller.minutesHandStyle = {
      'transform': `rotate(${controller.minutesHandAngle}deg)`
    };
    controller.hoursHandStyle = {
      'transform': `rotate(${controller.hoursHandAngle}deg)`
    };
  };

  ClockController.$inject = ['$interval'];

  function init() {
    $interval(controller.tick, 1000);
  }

  init();
}



angular
  .module('PortfolioApp')
  .controller('ClockController', ClockController);
