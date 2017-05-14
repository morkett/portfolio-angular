console.log('RECORD PLAYER!!!!!!');
jQuery(document).ready(function() {

  jQuery('.btn-off').hide();
  jQuery('.btn-on').click(function(){

    console.log('hit');
    jQuery('#needle').addClass('needle-on');
    jQuery('.shadow').addClass('shadow-rotate');
    jQuery('p').hide();
    jQuery('#needle').css('background','transparent');
    jQuery('.btn-on').hide();

    setTimeout(function () {
      jQuery('#needle').addClass('needle-shake');
      jQuery('.shadow').addClass('shadow-shake');
      jQuery('#record').addClass('spin').css('-webkit-animation-play-state', 'running');
      jQuery('.play-1').trigger('play');
    }, 1000);
    setTimeout(function () {
      jQuery('.play-2').trigger('play');
      jQuery('.btn-off').show();
    }, 2000);


  });


  jQuery('.btn-off').click(function(){

    jQuery('#needle').removeClass('needle-shake');
    jQuery('.shadow').removeClass('shadow-shake');
    jQuery('.btn-off').hide();

    setTimeout(function () {
      jQuery('#needle').removeClass('needle-on');
      jQuery('.shadow').removeClass('shadow-rotate');
      jQuery('.play-2').trigger('pause');
    }, 10);
    setTimeout(function () {
      jQuery('.play-1').trigger('pause');
      jQuery('.spin').css('-webkit-animation-play-state', 'paused');

      jQuery('.btn-on').show();
    }, 1000);


  });
});

console.log('RECORD PLAYER!!!!!!');
