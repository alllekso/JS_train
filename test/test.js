let number1;
let number2;
let result;
let key;


function sum() {
    number1 = document.getElementById("first").value;
    number2 = document.getElementById("second").value;
    result = +number1 + +number2 ;
    show_result();
}


function show_result() {
    document.getElementById("display").value = result;
}

function subtraction() {
    number1 = document.getElementById("first").value;
    number2 = document.getElementById("second").value;
    result = +number1 - +number2 ;
    show_result();
}

function division() {
    number1 = document.getElementById("first").value;
    number2 = document.getElementById("second").value;
    result = +number1 / +number2 ;
    show_result();
}

function multiplication() {
    number1 = document.getElementById("first").value;
    number2 = document.getElementById("second").value;
    result = +number1 * +number2 ;
    show_result();
}

function key2() {
    key = +2;
    document.getElementById("first").value = key;
}

function key4() {
    key = +4;
    document.getElementById("first").value = key;
}






function key3() {
    key = +3;
    document.getElementById("second").value = key;
}