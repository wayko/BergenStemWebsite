
var player;
$('ul.nav li.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('ul.nav li.dropdown').on("hover","ul.nav li.dropdown",function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

/* $('.carousel').on('slide.bs.carousel',function() {
currentIndex = $('div.active').index() + 1;
 console.log(currentIndex);
if(currentIndex == 1)
{

player.playVideo();

} 
}); */




var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {

player = new YT.Player('youtube', {   
height: '600',
width: '1659',
videoId: 'n1hHr62viSU',
playerVars:{
	'autoplay':1,
	'controls':0
}/* ,
events: {
'onStateChange': onPlayerStateChange
} */
});
}

/* var done = false;
function onPlayerStateChange(event) {
switch(event.data){
case 1:
$('.carousel').carousel('pause');
break;
default:
$('.carousel').carousel();
break;
}
}
function stopVideo() {
player.stopVideo();
} */