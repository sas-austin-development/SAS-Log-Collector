/**********************************************************/
/******* Generate Log Assistance Button Java Script *******/
/**********************************************************/

/* This is the Button Javascript for the Generate Log Assistance Button */
/* So far, I have been able to apply new elements to UL element with DOM Manipulation */
/* Using the Hidden Function, we can also un-hide the SDW log collection section until User generated */
/* IMPORTANT: Not sure if Hidden Manipulation is available in IE or Opera */


/* Adding DOM Reference for ID's and Assigning them to Variables - These are all under the Collect Information for Log Assistance Section */
var button = document.getElementById("generateLogAssistance");
var input = document.getElementById("testId");
var ul = document.getElementById("itemList");
var email = document.getElementById("inputEmail");
var trackingNumber = document.getElementById("inputTrackingNumber");

/* Setting the Header and Body Hidden when the Site loads*/
document.getElementById("testsdwcheck").hidden = true;
document.getElementById("logColectorAssistance").hidden = true;

/* Length Function(s) - Finding the Length of an Input and Returning it */ /* Future Efficiency Increase- Implement this into an Array */
function inputLength() {
	return input.value.length;
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

/* Create List Function - When called, it creates a new LI elements and appends it to the UL parent element */
function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); 
		ul.appendChild(li);
		input.value = "";	
		console.log("List Element Added");
}

/* Add List Function after Click- If the User has Something in the 3 Input Boxes, it will call the Create List Element Function */
function addListAfterClick(){
	if (inputLength() > 0 && inputLengthEmail() > 0 && inputLengthTrackingNumber() > 0 ) {
		createListElement();
	}
}

/* Add List After Keypress - Calls the createList Element Function if the Input is > 0  */
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keycode === 13 /*Keycode 13 is the RETURN or ENTER key*/) { 
		createListElement();
	}
}

/* Adds Event Listeners for the Button and Input, when events happen, it calls the Listed Functions*/
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress); /*Listens Every Keypress and sends to addListAfterKeypress Function*/


/* Appears the SDW Steps when the "Generate Log Assistance" is Pressed if there is something in the Email && Tracking Number Field */
button.addEventListener("click", function() {
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
}, false);