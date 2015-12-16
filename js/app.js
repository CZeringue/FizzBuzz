$(document).ready(function() {
    FizzBuzz(parseInt(prompt("Please give me a number."),10));
});

function FizzBuzz (y) {
    if (typeof y==='number' && (y%1)===0) { 
    //else check to see if divisible by 3
    //else check to divisible by 5
    //else print
    
    for (i=1; i <= y; i++) { 
    if (i%3===0 && i%5===0 && i!= 0) { //check to see if divisible by 3 AND 5
        $('body').append("<br />FizzBuzz");
    }
    else if (i%3===0) {
        $('body').append("<br />Fizz");
    }
    else if (i%5===0) {
            $('body').append("<br />Buzz");
    }
    else {
        $('body').append("<br /> ",i);
    }
   
}
}
else {
    alert("Try again.");
}
    
    
    }