function AboutController($scope, $location, $anchorScroll){
  var controller = this;

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
  };


  controller.aboutInfo = {
    title: 'i am a self-taught front-end web developer from london',
    desc: 'i have experience of creating responsive interactive websites and apps by hand-coding html, css, and javascript. i am passionate about design and alongside my technical ability, i can create innovative interfaces which allow ease of usability. i follow many online blogs and front-end news sites to keep updated with current standards and new developments in an ever-changing field. teaching myself to code while working full-time has required me to be proactive, a fast learner, and efficient in my methods of execution.',
    anchor: 'information',
    codepen: 'https://codepen.io/morkett',
    github: 'https://github.com/morkett',
    email: 'dcorkett@gmail.com',
    cv: 'David-Corkett-Front-End-Developer.pdf',
    list: ['codepen', 'github','email','cv']
  };

  controller.aboutDev = {

    title: 'development',
    desc: 'these languages, frameworks and libraries create the bones of the website or app, dictate appearance, and manipulate behavior, bringing the website to life. coupled with version control, MVC and agile approaches allows for efficientcy in workflow and consistency in user experience.',
    anchor: 'skills',
    list: ['css3', 'html5', 'js','jquery','scss','angular','nodejs','express','firebase','mongo','Gulp']
  };

  controller.aboutDesign = {
    title: 'design',
    desc: 'these tools complement the development of websites by allowing image manipulation, creating website layouts and designing online resources such as svgs.',
    list: ['PS','AI']
  };




  function init() {

  }


  init();
}

AboutController.$inject = ['$scope', '$location', '$anchorScroll', '$state'];


angular
  .module('PortfolioApp')
  .controller('AboutController', AboutController);
