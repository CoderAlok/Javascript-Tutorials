// This is a self function
// IIFE - Immediately Invoked Function Expression.

(function(){
	var age = 15;
	document.getElementById("test").innerHTML = age;
})();

{
	if (true) {
		const k = 100;
		let l = 200;
		console.log(k, l);
	}
	var z = 'This is a Z-Index';
	// console.log(k, l);
}
console.log(z);

{
	let first_name = "Alok";
	{
		let first_name = "Manish";
		{
			let first_name = "Mann";
			console.log("First Scope : "+first_name);
		}
		console.log("Secound Scope : "+first_name);
	}
	console.log("Third Scope : "+first_name);
}


{
	{
		// This Block Contains :
		// Primitive Datatypes 
		let name = 'Alok';
		let roll = 10;
		let status = true;
		let pi;
		let x = null;

		console.log('name : '+name+'\nroll : '+roll+'\nstatus : '+status+'\npi : '+pi+'\nx : '+x);
	}

	{
		// This Block Contains :
		// Objcets Datatypes 
		let names = ['Alok', 'Prasil', 'Karan', 'Ramesh', 'Rajesh'];

		console.log("Array length : "+names.length);

		// for loop
		console.log('\nFor loops : \n');
		for(var i=0; i < names.length; i++){
			console.log(names[i]);
		}

		// while loop
		console.log('\nWhile loops : \n');
		i = 0;
		while( i < names.length ){
			console.log(names[i]);
			i++;
		}
		
		// do-while loop
		console.log('\nFor Do While Loop : \n');
		i = 0;
		do{
			console.log(names[i]);
			i++;
		}while(i<names.length);

		let emp_details = {
			fname: "Debosree",
			lname: "Banerjee",
			sex: "Male",
			age: 29,
			user_func: function(){
				console.log("Yay!");
			},
			zones:{
				north: "Delhi",
				south: "Bangalore",
				east: "Kolkata",
				west: [
					"Ahmedabad",
					"Mumbai",
					"Pune",
					"Nagpur"
				]
			}
		};

		console.log(emp_details.fname + "\n"+
					emp_details.lname + "\n"+
					emp_details.sex + "\n"+
					emp_details.age+ "\n"+
					emp_details.zones.west[3]);
		console.log(emp_details.zones.north);

		emp_details.user_func();  // to use that function


		// Objects
		let now = new Date();
		console.log(now);
	}
	
}











{
	// Nilanjan Da
	// mimon 
	// Shilpi
	// Ashiq Army
	// Abhishek
	// Debjit
	// rony
	// Arindam
	// Arijit
	// Arijit wife
	// Santosh
	// Bikash
	// Prosenjit
	// Sudhangshu
	// Papan
	// Bubul
	// Kutai
	// Dipu
	// Jewel
	// Chayan
	// mithun 
	// Rajib
	// sathi
}


session 
sql injection 

hooks

@media query in css




