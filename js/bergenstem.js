
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


 function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
	
    function postToGoogle(){
		var dataForm = "";
        var name = $('#name').val();
        var email = $('#email').val();
        var sid = $('#sid').val();
		var major = $('[name=major]:checked').val();
		var otherMajor = $('#otherMajor').val();
		/* if (major == "Other")
		{
			dataForm = {"entry.1045781291" : email, "entry.2005620554" : name, "entry.1065046570" : sid, "entry.1166974658.other_option_response" : otherMajor, "entry.1166974658" : major , "entry.1166974658":	"__other_option__"};
		}
		else
		{
			dataForm = {"entry.1045781291" : email, "entry.2005620554" : name, "entry.1065046570" : sid, "entry.1166974658.other_option_response" : "", "entry.1166974658" : major};
		} */
		
		
		
		if (major == "Other")
		{
			dataForm = {"emailAddress" : email, "entry.2005620554" : name, "entry.1166974658" : sid, "entry.1891819764.other_option_response" : otherMajor, "entry.1891819764" : major , "entry.1891819764":	"__other_option__"};
		}
		else
		{
			dataForm = {"emailAddress" : email, "entry.2005620554" : name, "entry.1166974658" : sid, "entry.1891819764.other_option_response" : otherMajor, "entry.1891819764" : major };
		}
		
		
		

        if ((name !== "") && (email !== "") && (sid !== "") && (validateEmail(email)) && (major !== "") && (major !== undefined) ){
           
		  /*  var gformUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfSKTmoPBo1LxufaWVQv-nxcNA68BPMp09uLMdc--8JS3GS3A/formResponse'; */
		   
		   var gformStemUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfLXVkErFeOgj-M93Of1VxLdaxFKm755DF4C_emEzUu2x5_Xg/formResponse"
		

$.ajax({
    url: gformStemUrl,
	data: dataForm,
	type: "POST",
    dataType: "jsonp",
    success: function(successResponse) {
        console.log(successResponse); // server response
    },
	error: function(errorRespose){
		console.log(errorRespose);
	}

});
		   
		   
				
        } else {
            //Error message
			alert("Empty Item Found");
        }
	}
	$(document).ready(function(){
                $('#form').submit(function() {
                    postToGoogle();
                    return false;
                });
            });