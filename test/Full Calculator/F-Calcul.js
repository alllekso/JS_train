"use strict";


let display;
let result = 0;
let current_value = "";
let history;



function key1(){
    document.getElementById("display").innerHTML = "1";
    current_value = current_value + "1";
}


function key2() {
    document.getElementById("display").innerHTML = "2";
    current_value = current_value + "2";
}


function plus() {
    result = result + +current_value;
    current_value = "";

}

function ravno() {
    result = result + +current_value;
    // display = (current_value + "+" + current_value + "=" + result);
    // history = history + display;
    showdisplay();
    // display_result();
}

function showdisplay() {
    document.getElementById("display").innerHTML = result;

}

// function display_result() {
//     document.getElementById("display").innerHTML = history;
// }