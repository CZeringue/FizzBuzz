


$(document).ready(function fizz () {
var x = prompt("Please give me a number.")
var y = parseInt(x,10);

if (typeof y==='number' && (y%1)===0) {	
	//else check to see if divisible by 3
	//else check to divisible by 5
	//else print
	while (y > 0) { 
	if (y%3===0 && y%5===0 && y!= 0) { //check to see if divisible by 3 AND 5
		$('body').append("<br />FizzBuzz");
	}
	else if (y%3===0) {
		$('body').append("<br />Fizz");
	}
	else if (y%5===0) {
			$('body').append("<br />Buzz");
	}
	else {
		$('body').append("<br /> ",y);
	}
	y--;
}
}
else {
	alert("Try again.");
}


});