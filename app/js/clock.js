
console.log('HELLLOOOOOOOO');
function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();

        document.getElementById('js-seconds').style.cssText = "transform:rotate(" + s + "deg);";
        document.getElementById('js-minutes').style.cssText = "transform:rotate(" + m + "deg);";
        document.getElementById('js-hours').style.cssText = "transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000);

    }
}



window.onload = moveHands;


jQuery(document).ready(function() {
  jQuery(".icon-volume-high").click(function(){
    jQuery(this).css("display", "none");
    jQuery(audio).muted = true;
    jQuery(".icon-volume-mute").css("display", "block");
});

jQuery(".icon-volume-mute").click(function(){
  jQuery(this).css("display", "none");
  jQuery(".icon-volume-high").css("display", "block");
});
});
