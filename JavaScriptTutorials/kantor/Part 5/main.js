/**
 * 
 */

if (typeof (Calculation) === "undefined")
{
	Calculation = {};
}

function runExample(){
	counterExample();
	alert(Calculation.Profit(10));
}

function counterExample(){
	
    function createCounter() {
        var numberOfCalls = 0;
        return function() {
           return ++numberOfCalls;
        }
     }
     
     var fn = createCounter();
     var text = '';
     
     text += fn() + ", "; //1
     text += fn() + ", "; //1, 2
     text += fn(); //1, 2, 3
     
     alert(text);
}

Calculation.Profit = function(input){
	return 100*input;
}
