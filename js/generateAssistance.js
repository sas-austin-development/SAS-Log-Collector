/* THis is Button Javascript for the Generate Log Assistance Button */
var button = document.getElementById("generateLogAssistance");
var input = document.getElementById("testId");
var ul = document.getElementById("itemList");

button.addEventListener("click", function(){
	if (input.value.length>0){
		console.log("CLICK!!!");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); 
		ul.appendChild(li);
		input.value = "";	
	}
	
})