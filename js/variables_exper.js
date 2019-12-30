// var age = 56;
// var newAge = age;
// var aeg1; // Undefined variable might produce an error.


// var first_val = document.getElementById('first_val').value;
// var sec_val = document.getElementById('sec_val').value;

document.getElementById("btn-add").onclick = function() {
	var val1 = document.getElementById('first_val').value = " ";
	var val2 = document.getElementById('sec_val').value = " ";
	console.log(val1+" "+val2); 
}

document.getElementById("btn-sub").onclick = function() {console.log("He");}

document.getElementById("btn-mul").onclick = function() {console.log("He");}

document.getElementById("btn-div").onclick = function() {console.log("He");}

document.getElementById("btn-mod").onclick = function() {console.log("He");}

document.getElementById("btn-sqr").onclick = function() {console.log("He");}

document.getElementById("btn-cube").onclick = function() {console.log("He");}

document.getElementById("btn-clr").onclick = function() {
	document.getElementById('first_val').value = " ";
	document.getElementById('sec_val').value = " ";
}

// Operators in javascript
