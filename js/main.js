// function to calculate teh Square of a number.
function testSqr(a){
	return a*a;
}

// This functions are related to the events with the elements.
function Calculate(x){
	alert("Result : "+testSqr(x));
}

document.getElementById("order_now").onclick = function(){
	// alert("Hello  Alok .. Order Now");
	document.getElementById("order").innerHTML = "Order placed ... Please chech the emails.";
	document.getElementById("order").style.backgroundColor= '#ff00ff';
	document.getElementById("order").style.color= '#99aa3d';
	document.getElementById("order").style.textSize= '30px';
	document.getElementById("order").style.borderColor= '#88a5af';

	document.getElementById("order_now").style.display= 'none';
}


document.getElementById("btn_prompt").ondblclick = function(){
	var res = "Invalid input";
	var username = prompt("Username please");
	if(username != 1){
		res = "Perfect input";
	}
	console.log(res);
}