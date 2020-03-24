

"use strict";

let a;
let b;
let sum;
let result;
let history = "";
let display;



function collbeack() {
    summa();
}
function collbeack_2() {
    minus();
}
function collbeack_3() {
    multi();
}

function getvalue() {
    a = document.getElementById("number_A").value;
    b = document.getElementById("number_B").value;
}

function display_result() {
    document.getElementById("display").innerHTML= history;
}



function last_result() {
    document.getElementById("number_A").value = result;

}

function summa(){
    getvalue();
    result = (+a + +b);
    display = (a + " + " + b + " = " +result);
    history = history + display + "<br>";
    display_result();
}

function minus() {
    getvalue();
    result = (+a - +b);
    display = (a + " - " + b + " = " +result);
    history = history + display + "<br>";
    display_result();
}

function multi() {
    getvalue();
    result = (a * b);
    display = (a + " * " + b + " = " +result);
    history = history + display + "<br>";
    display_result();
}

