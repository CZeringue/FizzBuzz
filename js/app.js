var x = prompt("Please give me a number.")
var y = parseInt(x,10);


$(document).ready(function () {
if (typeof y==='number' && (y%1)===0) {	
	//else check to see if divisible by 3
	//else check to divisible by 5
	//else print
	while (y > 0) { 
	if (y%3===0 && y%5===0 && y!= 0) { //check to see if divisible by 3 AND 5
		console.log("FizzBuzz");
	}
	else if (y%3===0) {
		console.log("Fizz");
	}
	else if (y%5===0) {
		console.log("Buzz");
	}
	else {
		console.log(y)
	}
	y--;
}
}
else {
	alert("Try again.");
}


});