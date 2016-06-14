var errorraised = false;
var passwordset = false;
var getClickStarted = false;
var autosubmit = true;
var password ="";
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
var profileImageInitX = 0;
var profileImageInitY = 0;

var X1 =0;
var X2 = 0; 
var Y1 = 0;
var Y2 =  0;
var X3 = 0;
var Y3 =  0 ; 
var Y4 = 0; 



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

	 		// $(".button").on("touchstart", function (event){

	 		// 	if(!getClickStarted){

	 		// 		getClickStarted = true;



	 		// 		if (event && event.preventDefault){
	 		// 			event.preventDefault();
	 		// 		}

	 		// 		$("#" + event.target.id).removeClass("button").addClass("activebutton");

	 		// 		password = event.target.id.split("button").join("");
	 		// 		startpointnumber = event.target.id.split("button").join("");


	 		// 	}

	 		// });

	 		$('.profiledragimage').bind("touchstart", function(event){
	 			console.log(event);
	 			getClickStarted = true;
	 			if(profileImageInitX == 0)
	 				profileImageInitX = event.originalEvent.touches[0].clientX ;

               // profileImageInitX = $('.profiledragimage').position().left + 50;
               // profileImageInitY = $('.profiledragimage').position().top + 50;
               if(profileImageInitY == 0)
               	profileImageInitY = event.originalEvent.touches[0].clientY ;

               centerX1 = $('.profiledragimage').offset().left;
               centerY1 = $('.profiledragimage').offset().top;
     //           $( ".patterndiv" ).append( "<div id = 'button1' class='button'>" + 
     //           	"<div id = 'button2' class='button'> " +
     //           	"<div id = 'button3' class='button'>" +
     //           	"<div id = 'button4' class='button'>" +
     //           	"<div id = 'button5' class='button'>" +
	 			// "<div id = 'button6' class='button'>" );

                // var x = $('.profiledragimage').position().left;
                // var y = $('.profiledragimage').position().top;
                // console.log($('#button1').position());
                // console.log($('.profiledragimage').position());
                // console.log("x : " + x + " y : " + y);
                var x = -15;
                var y = -15;
                X1 = x + 87;
                X2 =  x - 87 ; 
                Y1 = y + 50;
                Y2 =  y - 50 ;
                X3 = x;
                Y3 =  y - 100 ; 
                Y4 =  y + 100 ; 




                // $('#button6').css({'transform' : "translate3d(" + X3 + "px ," + Y4 + "px, 0)"});
                // $('#button5').css({'transform' : "translate3d(" + X1 + "px ," + Y1 + "px, 0)"});
                // $('#button3').css({'transform' : "translate3d(" + X1 + "px ," + Y2 + "px, 0)"});
                // $('#button1').css({'transform' : "translate3d(" + X3 + "px ," + Y3 + "px, 0)"});
                // $('#button2').css({'transform' : "translate3d(" + X2 + "px ," + Y2 + "px, 0)"});
                // $('#button4').css({'transform' : "translate3d(" + X2 + "px ," + Y1 + "px, 0)"});

                $('#button1').css({'transform' : "translate3d(" + Y4 + "px ," + X3 + "px, 0)"});
                $('#button2').css({'transform' : "translate3d(" + Y1 + "px ," + X1 + "px, 0)"});
                $('#button3').css({'transform' : "translate3d(" + Y2 + "px ," + X1 + "px, 0)"});
                $('#button4').css({'transform' : "translate3d(" + Y3 + "px ," + X3 + "px, 0)"});
                $('#button5').css({'transform' : "translate3d(" + Y2 + "px ," + X2 + "px, 0)"});
                $('#button6').css({'transform' : "translate3d(" + Y1 + "px ," + X2 + "px, 0)"});

	 			 //  $('#button1').css({'transform' : "translate3d(" + 0 + "px ," + 0 + "px, 0)"});
	 			 // $('#button2').css({'transform' : "translate3d(" + 87 + "px ," + 50 + "px, 0)"});
	 			 // $('#button3').css({'transform' : "translate3d(" + 87 + "px ," + -50 + "px, 0)"});
	 			 // $('#button4').css({'transform' : "translate3d(" + 0 + "px ," + -100 + "px, 0)"});
	 			 // $('#button5').css({'transform' : "translate3d(" + -87 + "px ," + -50 + "px, 0)"});
	 			 // $('#button6').css({'transform' : "translate3d(" + -87 + "px ," + 50 + "px, 0)"});


               // $('.resp-tabs-container').css({'transform' : "translate3d(" + x + "px ," + y + "px, 0)"});


           });

	 		$('.profiledragimage').bind("touchmove", function(event){
	 			// console.log(event);
	 			var currentX = event.originalEvent.touches[0].clientX ; 
	 			var currentY = event.originalEvent.touches[0].clientY;
	 			var x = currentX - profileImageInitX - 50;
	 			var y = currentY - profileImageInitY - 50;
	 			

	 			$('.profiledragimage').css({'transform' : "translate3d(" + x + "px ," + y + "px, 0)"});
	 			// console.log("x : " + currentX + " y : "+currentY);
	 			// $('.profiledragimage').css({left : x  ,top : y});
	 			var offset = 30;
	 			for (var i = 1; i <=6; i++) {
	 				
	 				if((Math.abs($('#button' + i).offset().left - currentX )< offset ) || ( Math.abs(currentX - $('#button' + i).offset().left) < offset )){
	 					if((Math.abs($('#button' + i).offset().top - currentY) < offset ) || ( Math.abs(currentY - $('#button' + i).offset().top) < offset	 )){
	 						
	 						endpointnumber = i;

	 						if (startpointnumber != endpointnumber) {
	 							
	 							if ($("#button" + i).hasClass("button")) {
	 								$("#button" + i).removeClass("button").addClass("activebutton");
	 							} 

	 							console.log("button : " + i);
	 							password += i;

	 							startpointnumber = endpointnumber;
	 						}

	 					}
	 				}
	 			}

	 			
// 	 			
});

	 		$(".profiledragimage").on("touchend", function (event){
	 			var currentX = event.originalEvent.changedTouches[0].clientX ; 
	 			var currentY = event.originalEvent.changedTouches[0].clientY;
	 			console.log(event);
	 			var x =  profileImageInitX - currentX ;
	 			var y =  profileImageInitY - currentY ;
	 			

	 			$('.profiledragimage').css({'transform' : "translate3d(" + -50 + "px ," + -50 + "px, 0)"});
	 			

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

	 	// 	$(document).bind("touchmove", function(event) {
			//     if (getClickStarted){ //to avoid mousemove triggering before click


			//     	var element = document.elementFromPoint(event.originalEvent.touches[0].clientX, event.originalEvent.touches[0].clientY);

			//     	console.log("Element : " + element);
			//     	if(element.className == "button" || element.className == "activebutton"){

			//     		endpointnumber = element.id.split("button").join("");

			//     		if (startpointnumber != endpointnumber) {

			//     			if (element.className == "button") {
			//     				$("#" + element.id).removeClass("button").addClass("activebutton");
			//     			} 


			//     			password += element.id.split("button").join("");

			//     			startpointnumber = endpointnumber;
			//     		}


			//     	}
			//     }



			//     $("#patterncontainer").on("touchend", function (event){

			//     	if(getClickStarted) {
			//     		if (event && event.preventDefault){
			//     			event.preventDefault();
			//     		}

			//     		if (autosubmit) {
			//     			formsubmit();
			//     		}
			//     	}
			//     	getClickStarted = false;
			//     });
			// });

		} else {
			alert ("INTERNET EXPLORER NOT SUPPORTED!!");
		}
	}());

function formsubmit(){
	if(getlength(password) > 0){
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
				window.open("/welcome",'_parent');
				return false;

			}
			else {
				document.getElementById("heading").innerHTML = "The entered pattern does not match";
				clearPattern();
	    		//raiseerror("IncorrectPattern");
	    	}
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