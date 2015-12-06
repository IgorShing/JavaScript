/**
 * Created by Admin on 05.12.2015.
 */
"use strict";

var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";

var color = COLOR_ORANGE;


function getAllLabels(){
    var elements = document.getElementsByTagName('label');

    for (var i =0; i < elements.length; i++){
        var input = elements[i];
        console.log(input.value + ' : ' + input.checked);
    }
}


function show(){

/*    document.body.style.backgroundColor = 'red';
    alert( 'Поменяли цвет BODY' );*/

/*    document.body.style.backgroundColor = '';
    alert( 'Сбросили цвет BODY' );*/
/*    var checked = true; // поле формы помечено галочкой


    var user = {
        name: "Вася"
    };

    var name1 = "Peter";
    var name2 = "Ann";

    if (checked == true){
        alert(user.name);
    }*/

/*    var name1 = "Peter";
    var name2 = "Ann";
    name2 = name1;

    alert(name2);
    console.log(typeof user);
    console.log(typeof undefined) // "undefined"
    console.log(typeof 0) // "number"
    console.log(typeof true) // "boolean"
    console.log(typeof "foo") // "string"
    console.log(typeof {}) // "object"
    console.log(typeof null) // "object"  (1)
    console.log(typeof function(){}) // "function"  (2)*/

    alert(null == 0);

    if (null == 0){
        alert(1);
    }
}
show();


