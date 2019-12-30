function sqr(a){
	return a*a;
}

function cube(a){
	return a*a*a;
}


// Importing functions from Other js files.
// import { sqr } from 'common.js';
// document.write('<script type="text/javascript" src="common.js"></script>');

// var age = 56;
// var newAge = age;
// var aeg1; // Undefined variable might produce an error.


// var val1 = document.getElementById('first_val').value;
// var val2 = document.getElementById('sec_val').value;

document.getElementById("btn-add").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;
	var c = parseInt(val1) + parseInt(val2);
	console.log(c); 
	document.getElementById('result').innerHTML = c;
}

document.getElementById("btn-sub").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;
	var c = parseInt(val1) - parseInt(val2);
	console.log(c); 
	document.getElementById('result').innerHTML = c;
}

document.getElementById("btn-mul").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;
	var c = parseInt(val1) * parseInt(val2);
	console.log(c); 
	document.getElementById('result').innerHTML = c;
}

document.getElementById("btn-div").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;
	var c = parseInt(val1) / parseInt(val2);
	console.log(c); 
	document.getElementById('result').innerHTML = c;
}

document.getElementById("btn-mod").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;
	var c = parseInt(val1) % parseInt(val2);
	console.log(c); 
	document.getElementById('result').innerHTML = c;
}

document.getElementById("btn-sqr").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;

	var c;
	// console.log(c);
	var c = sqr(parseInt(val1));
	console.log(c); 
	document.getElementById('result').innerHTML = c; 
}

document.getElementById("btn-cube").onclick = function() {
	var val1 = document.getElementById("first_val").value;
	var val2 = document.getElementById('sec_val').value;

	var c = cube(parseInt(val1));
	console.log(c); 
	document.getElementById('result').innerHTML = c; 
}

document.getElementById("btn-clr").onclick = function() {
	// document.getElementById('first_val').placeholder = "Enter First Value";
	// document.getElementById('sec_val').placeholder = "Enter Secound Value";

	document.getElementById('first_val').value = "";
	document.getElementById('sec_val').value = "";
	document.getElementById('result').innerHTML = "";
}

// Operators in javascript


