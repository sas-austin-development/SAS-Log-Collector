/**********************************************************/
/******* Generate Log Assistance Button Java Script *******/
/**********************************************************/

/* This is the Button Javascript for the Generate Log Assistance Button */
/* So far, I have been able to apply new elements to UL element with DOM Manipulation */
/* Using the Hidden Function, we can also un-hide the SDW log collection section until User generated */
/* IMPORTANT: Not sure if Hidden Manipulation is available in IE or Opera */


/* Adding DOM Reference for ID's and Assigning them to Variables - These are all under the Collect Information for Log Assistance Section */
var button = document.getElementById("generateLogAssistance");
var ul = document.getElementById("itemList");
var email = document.getElementById("inputEmail");
var trackingNumber = document.getElementById("inputTrackingNumber");
var scrollStep = document.getElementById("testDivId");

/* Setting the Header and Body Hidden when the Site loads*/
document.getElementById("testsdwcheck").hidden = true;
document.getElementById("logColectorAssistance").hidden = true;

/* Length Function(s) - Finding the Length of an Input and Returning it */ /* Future Efficiency Increase- Implement this into an Array */
function inputLengthEmail() {
	return email.value.length;
}
function inputLengthTrackingNumber() {
	return trackingNumber.value.length;
}

/* Output Email and Tracking Number Values for Storage Purposes*/
function outputEmail() {
	return email.value;
}
function outputTrackingNumber() {
	return trackingNumber.value;
}

/* Appears the SDW Steps when the "Generate Log Assistance" is Pressed if there is something in the Email && Tracking Number Field */
/* IMPORTANT: IF this does not work in other browsers, the alternative is to use the display: none CSS and update it using JS CSS Manipulation */
function updatePage(){
		if (inputLengthEmail() > 0 && inputLengthTrackingNumber() > 0 /*Tracking Numbers are 10 Digits*/) 
		{	
			/* Next Steps Appear */
			document.getElementById("testsdwcheck").hidden = false;
			document.getElementById("logColectorAssistance").hidden = false;
			
			/* Hold the User's Email & Tracking Number */
			var emailHold = outputEmail();
			var trackingNumberHold = outputTrackingNumber();
			console.log("User's Email: " + emailHold);
			console.log("User's Tracking Number: " + trackingNumberHold);
		}	  
	else{
		alert("Please enter a Valid Email and Tracking Number"); 
	}
}

function multiFunction(){
	updatePage();
	// scrollIntoView();
}

button.addEventListener("click", multiFunction, true);
