function AboutController($scope, $location, $anchorScroll){
  var controller = this;

  controller.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
  };


  controller.aboutInfo = {
    title: 'i am a front-end web developer from london',
    desc: 'An experienced Web Developer specialising in front end development. Well-versed in structuring, developing and implementing interactive and optimised websites. Proficient in numerous programming languages and working in an agile way. Some projects have reached over 24,000 views and have been published on leading coding websites. Passionate about design and creating innovative interfaces. I\'m looking to work in an innovative team taking my skills and career to the next level.',
    anchor: 'information',
    codepen: 'https://codepen.io/morkett',
    github: 'https://github.com/morkett',
    email: 'dcorkett@gmail.com',
    cv: 'cv.pdf',
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
