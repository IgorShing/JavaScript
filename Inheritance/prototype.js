/**
 * Created by Admin on 06.12.2015.
 */
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );