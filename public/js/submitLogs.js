/**********************************************/
/******* Submit Logs Button Java Script *******/
/**********************************************/

/* This is the Button Javascript for the Generate Log Assistance Button */
/* So far, I have been able to apply new elements to UL element with DOM Manipulation */
/* Using the Hidden Function, we can also un-hide the SDW log collection section until User generated */
/* IMPORTANT: Not sure if Hidden Manipulation is available in IE or Opera */


/* Adding DOM Reference for ID's and Assigning them to Variables - These are all under the Collect Information for Log Assistance Section */
var button = document.getElementById("submitLogs");
var input = document.getElementById("testId");
var ul = document.getElementById("itemList");
var email = document.getElementById("inputEmail");
var trackingNumber = document.getElementById("inputTrackingNumber");

/* Length Function(s) - Finding the Length of an Input and Returning it */ /* Future Efficiency Increase- Implement this into an Array */
function inputLength() {
	return 1;
}
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


button.addEventListener("click", function() {
			/* Hold the User's Email & Tracking Number */
			var emailHold = outputEmail();
			var trackingNumberHold = outputTrackingNumber();
			console.log("User's Email: " + emailHold);
			console.log("User's Tracking Number: " + trackingNumberHold);

			window.open('mailto:support@sas.com?subject='
						+trackingNumberHold+
						'&body=This email is in reference to Tracking Number: '+trackingNumberHold+
						'. \nThis tracks owner is: '
						+emailHold);
			window.close();
}, false);