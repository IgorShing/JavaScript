/**
 * 
 */
function Machine(power){
	var enabled = false;
	// Protected field
	this._power = power;
	
	
	this.enable = function(){
		enabled = true;
	};
	
	this.disable = function(){
		enabled = true;
	}
}

function CoffeeMachine(power){
	
	// Machine.call(this, power);  // Inheritance
    Machine.apply(this, arguments);
	
	var waterAmount = 0;
	
	this.setWaterAmount = function(amount){
		waterAmount = amount;
	}
	
	this.run(){
		console.log("Method run");
	}
	
	var parentEnable = this.enable;
	this.enable = function(){
		parentEnable.call(this);
		this.run();
	}
	
}

function runCoffeeMachineExample(){
	
	var power = 400;
	var waterAmount = 1000;
	
	var coffeeMachine = new  CoffeeMachine(power);
	
	coffeeMachine.enable();
	coffeeMachine.setWaterAmount(waterAmount);
	alert(coffeeMachine._power);
	coffeeMachine.disable();
	
}

