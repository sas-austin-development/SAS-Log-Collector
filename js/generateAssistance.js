/**********************************************************/
/******* Generate Log Assistance Button Java Script *******/
/**********************************************************/

/* This is the Button Javascript for the Generate Log Assistance Button */
/* So far, I have been able to apply new elements to UL element with DOM Manipulation */
/* Using the Hidden Function, we can also un-hide the SDW log collection section until User generated */
/* IMPORTANT: Not sure if Hidden Manipulation is available in IE or Opera */

/* Adding DOM Reference for ID's and Assigning them to Variables */
var button = document.getElementById("generateLogAssistance");
var input = document.getElementById("testId");
var ul = document.getElementById("itemList");

/* Setting the Header and Body Hidden when the Site loads*/
document.getElementById("testsdwcheck").hidden = true;
document.getElementById("logColectorAssistance").hidden = true;

/* Length Function - Finding the Length of an Input and Returning it */
function inputLength() {
	return input.value.length;
}

/* Create List Function - When called, it creates a new LI elements and appends it to the UL parent element */
function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); 
		ul.appendChild(li);
		input.value = "";	
		console.log("List Element Added");
}

/* Add List Function after Click- If the User has Something in the Input Box, it will call the Create List Element Function */
function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

/* Add List After Keypress - Calls the createList Element Function if the Input is > 0  */
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keycode === 13) {
		createListElement();
	}
}

/* Adds Event Listeners for the Button and Input, when events happen, it calls the Listed Functions*/
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


/* Appears the SDW Steps when the "Generate Log Assistance" is Pressed */
button.addEventListener("click", function() {
			  document.getElementById("testsdwcheck").hidden = false;
			  document.getElementById("logColectorAssistance").hidden = false;
}, false);