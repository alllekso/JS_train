"use strict";


let display;
let result = 0;
let current_value = "";
let save_value = "";
let history;
let znack ;




function key1(){
    document.getElementById("display").innerHTML = "1";
    current_value = current_value + "1";
}
function key2() {
    document.getElementById("display").innerHTML = "2";
    current_value = current_value + "2";
}
function key3() {
    document.getElementById("display").innerHTML = "3";
    current_value = current_value + "3";
}
function key4() {
    document.getElementById("display").innerHTML = "4";
    current_value = current_value + "4";
}
function key5() {
    document.getElementById("display").innerHTML = "5";
    current_value = current_value + "5";
}
function key6(){
    document.getElementById("display").innerHTML = "6";
    current_value = current_value + "6";
}
function key7() {
    document.getElementById("display").innerHTML = "7";
    current_value = current_value + "7";
}
function key8() {
    document.getElementById("display").innerHTML = "8";
    current_value = current_value + "8";
}
function key9() {
    document.getElementById("display").innerHTML = "9";
    current_value = current_value + "9";
}
function key0() {
    document.getElementById("display").innerHTML = "0";
    current_value = current_value + "0";
}




function plus() {
    result = result + +current_value;
    save_value = result;
    current_value = "";
    znack = '+';

}

function ravno() {
    switch (znack) {
        case znack = '+':
        result = result  + +current_value;
        display = (+save_value + znack + +current_value + "=" + result);
    }
    break;


    history = display;
    showdisplay();
    display_result();
    current_value = 0;
}



function showdisplay() {
    document.getElementById("display").innerHTML = result;

}

function display_result() {
    document.getElementById("history").innerHTML = history;
}

function minus() {
    result = result - +current_value;
    save_value = result;
    current_value = "";
}

function multy() {
    result = result * +current_value;
    save_value = result;
    current_value = "";
}

function delenie() {
    result = result / +current_value;
    save_value = result;
    current_value = "";
}