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

function key1() {
    key = +1;
    document.getElementById("first").value = key;
}
function key2() {
    key = +2;
    document.getElementById("first").value = key;
}
function key3() {
    key = +3;
    document.getElementById("first").value = key;
}
function key4() {
    key = +4;
    document.getElementById("first").value = key;
}
function key5() {
    key = +5;
    document.getElementById("first").value = key;
}

function key6() {
    key = +6;
    document.getElementById("second").value = key;
}
function key7() {
    key = +7;
    document.getElementById("second").value = key;
}
function key8() {
    key = +8;
    document.getElementById("second").value = key;
}
function key9() {
    key = +9;
    document.getElementById("second").value = key;
}
function key0() {
    key = +0;
    document.getElementById("second").value = key;
}

