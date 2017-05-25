
angular
  .module('PortfolioApp')
  .directive('resize', resize);

function resize () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      window.onresize = checkScreen;

      checkScreen();

      function  checkScreen () {
        if(window.innerWidth < 960){
          angular.element(element)         .parent().css("display", "none");

          angular.element(element).remove()
          // var css = {
          //   selector: '.content',
          //   rules: [
          //     'display: none'
          //   ]
          // };
          // var outputColorStyleSheet = css.selector + css.rules.join(';');
          // angular.element(document).find('head').prepend('<style type="text/css">' + outputColorStyleSheet + '</style>');
        }
      }
    }
  };
}
