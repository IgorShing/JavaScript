/**
 * 
 */

(function (){
	
var user = {
	name:'Peter',
		
	sayHi: function(){
		alert("Hi, I am " + this.name);
	}
};

function callUserExample(){
	user.sayHi();
};

	// Export the function to the global object
	window.callUserExample = callUserExample;
	
})();