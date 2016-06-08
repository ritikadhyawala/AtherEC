var errorraised = false;
var passwordset = false;
var getClickStarted = false;
var autosubmit = true;
var password;
var centerX1;
var centerY1;
var curX = 0;
var curY = 0;
var getClickStarted = false;
var htmlLine;
var startpointnumber=0;
var endpointnumber=0;
var clickedCarouselX = 0;
var clickedCarouselY = 0;



function clearPattern(){

	for (var i = 1; i <=6; i++) {
		var button = document.getElementById("button" + i);
		if(button){
		if (button.className == "activebutton") {
			$("#" + button.id).removeClass("activebutton").addClass("button");
			password = "";
		} 
	}
	}
};

function resetPattern(){
	clearPattern();
	localStorage.removeItem("password");
	passwordset = false;
	if(document.getElementById("heading")){
		document.getElementById("heading").innerHTML = "Please set your pattern";
	}
};
$(document).ready(function(){

	 // $('a').on('click touchend', function() { 
  //       var link = $(this).attr('href');   
  //       window.open(link,'_parent'); // opens in new window as requested 

  //       return false; // prevent anchor click    
  //   });   
  resetPattern();
  $('.slider').slider({
  	full_width: true,
  	indicators: false,
  	interval: 5000	
  });


	// $('.carousel').carousel('time_constant', 100);

	$('.carousel').carousel();

	 // $('.userlist').pushpin({ bottom : 10px });


	 (function checkIfPasswordIsSet() {
	 	if(document.getElementById("heading")){
	 		if (localStorage.getItem("password") ) {
	 			document.getElementById("heading").innerHTML = "Re - enter the pattern to save it";
	 			passwordset = true;
	 		}
	 		else {
	 			document.getElementById("heading").innerHTML = "Please set your pattern";
	 		}
	 	}
	 }());

	 (function main(){
	 	if(!window.navigator.msPointerEnabled) {

	 		$(".button").on("touchstart", function (event){

	 			if(!getClickStarted){

	 				getClickStarted = true;



	 				if (event && event.preventDefault){
	 					event.preventDefault();
	 				}

	 				$("#" + event.target.id).removeClass("button").addClass("activebutton");

	 				password = event.target.id.split("button").join("");
	 				startpointnumber = event.target.id.split("button").join("");


	 			}

	 		});

            
            $('.carousel-item').bind("touchstart", function(event){

                   console.log("Start" + event.originalEvent.touches[0].clientX + " " + event.originalEvent.touches[0].clientY);
                   clickedCarouselX = event.originalEvent.touches[0].clientX;
                   clickedCarouselY = event.originalEvent.touches[0].clientY;
            });
             
             $('.carousel-item').bind("touchend", function(event){
                   console.log("Stop" + event.originalEvent.changedTouches[0].clientX + " " + event.originalEvent.changedTouches[0].clientY);
                   // console.log(event);
                    if(clickedCarouselX == event.originalEvent.changedTouches[0].clientX && clickedCarouselY == event.originalEvent.changedTouches[0].clientY ){
                    var link = $(this).attr('href');   
                    window.open(link,'_parent');
                }
            });

	 		$(document).bind("touchmove", function(event) {
			    if (getClickStarted){ //to avoid mousemove triggering before click


			    	var element = document.elementFromPoint(event.originalEvent.touches[0].clientX, event.originalEvent.touches[0].clientY);

			    	console.log("Element : " + element);
			    	if(element.className == "button" || element.className == "activebutton"){

			    		endpointnumber = element.id.split("button").join("");

			    		if (startpointnumber != endpointnumber) {

			    			if (element.className == "button") {
			    				$("#" + element.id).removeClass("button").addClass("activebutton");
			    			} 


			    			password += element.id.split("button").join("");

			    			startpointnumber = endpointnumber;
			    		}


			    	}
			    }



			    $("#patterncontainer").on("touchend", function (event){

			    	if(getClickStarted) {
			    		if (event && event.preventDefault){
			    			event.preventDefault();
			    		}

			    		if (autosubmit) {
			    			formsubmit();
			    		}
			    	}
			    	getClickStarted = false;
			    });
			});

	 	} else {
	 		alert ("INTERNET EXPLORER NOT SUPPORTED!!");
	 	}
	 }());

	 function formsubmit(){

	 	if (passwordset == false) {
	 		localStorage.setItem("password", password);
			// successmessage("patternStored");

			console.log("the password is" + password);
			document.getElementById("heading").innerHTML = "Re - enter the pattern to save it";
			passwordset = true;
			clearPattern();
			return false;
		}
		else if ( errorraised == false && passwordset == true) {
			if (localStorage.getItem("password") == password) {
				document.getElementById("heading").innerHTML = "The pattern is saved successfully.";
				$('#pattern_fieldset').append("<input type='hidden' value='" + password + "'name='password' />");

				clearPattern();
				passwordset = false;

				return false;

			}
			else {
				document.getElementById("heading").innerHTML = "The entered pattern does not match";
				clearPattern();
	    		//raiseerror("IncorrectPattern");
	    	}
	    }
	};

	function getlength(number) {
		return number.toString().length;
	};

	function successmessage(successcode) {
		if(successcode == "screenUnlocked") {
			alert("You have unlocked the screen!");
		}
		if (successcode == "patternStored") {
			alert("Your pattern is stored. Thanks.");
			passwordset = true;	
		}
		if (successcode == "Success") {
			alert("Pattern Reset Success!");
		}
		location.reload();
	};

	function raiseerror(errorcode) {
		if(!errorraised){
			errorraised = true;
			if (errorcode == "lengthTooSmall") {
				alert("The pattern is too short. Please try again.");
			}
			if (errorcode == "repeatedEntry") {
				alert("You cannot use the same number twice. Please try again.");
			}
			if (errorcode == "IncorrectPattern") {
				alert("The entered pattern in incorrect. Please try again.");
			}
			if (errorcode == "emptyPassword") {
				alert("You did not set the password to reset it.");
			}
			location.reload();
		}
	};
});