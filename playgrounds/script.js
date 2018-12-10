var input = document.querySelector(".input");

input.addEventListener("input" , ()=>{
	if(input.value.length == 1){
		var node = document.createElement("LI");                 // Create a <li> node
		var textnode = document.createTextNode("Water");         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
	}
	console.log(input.value);
})