/**
 * 
 */
'use strict';

function count(N){

	var sum = 0;
	for (i = 0; i < N; i++){
		sum += i;
	}
	return sum; 
	
 }

/*
function checkAge(age) {
	  if (age > 18) {
	    return true;
	  } else {
	    return confirm('Родители разрешили?');
	  }
	}
*/

var str = +prompt("A string", 20);

alert(str);

var func = function(a ,b){

	return a + b;
}

count2 = count;

alert(count2(10));
alert(count2);

alert(func(2,3));


