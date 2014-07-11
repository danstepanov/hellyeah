var green = 0;
var red = 1;
var current = green;

$(document).ready(function(){
   var audio = "<audio id = 'myAudio'> 
 <source src ="hellyeah.mp3" type ="audio/mpeg"> </audio";
   $('body').append(audio);
   $("a:contains('Hellllllll yeah')").click(function(){
   $("#myAudio").play();
});
});

function updateIcon() {
if (current == red) {
	current = green;
	chrome.browserAction.setIcon({path:"images/icon" + current + ".png"});
}
else{
	current = red;
	chrome.browserAction.setIcon({path:"images/icon" + current + ".png"});
	
}

}

chrome.browserAction.onClicked.addListener(updateIcon);


