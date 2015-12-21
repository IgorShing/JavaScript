/**
 * Created by Admin on 19.07.2015.
 */


var handler = function(){
    alert("I like javascript!");
};
var runButton = document.getElementById("runButton");
runButton.addEventListener("click", handler, false);


var handlerTask2 = function(){
    var name = "Василий";
    var adminName = name;
    console.log(adminName);
    console.log(null==undefined);
    console.log('Жора' > 'Вася');
};
var runButtonTask2 = document.getElementById("runButtonTask2");
runButtonTask2.addEventListener("click", handlerTask2, false);

