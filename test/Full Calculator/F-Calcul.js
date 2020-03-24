"use strict";


let button_1;
let button_2;
let button_3;
let button_4;
let button_5;
let button_6;
let button_7;
let button_8;
let button_9;
let button_0;

let button_plus;
let button_minus;
let button_multy;
let button_delenie;
let button_cleen;
let button_delete;

let display;




function get_page_elements() {
    button_1 = document.getElementById("key1");
    button_2 = document.getElementById("key2");
    button_3 = document.getElementById("key3");
    button_4 = document.getElementById("key4");
    button_5 = document.getElementById("key5");
    button_6 = document.getElementById("key6");
    button_7 = document.getElementById("key7");
    button_8 = document.getElementById("key8");
    button_9 = document.getElementById("key9");
    button_0 = document.getElementById("key0");

    button_plus = document.getElementById("key0");
    button_minus = document.getElementById("key0");
    button_multy = document.getElementById("key0");
    button_delenie = document.getElementById("key0");
    button_cleen = document.getElementById("key0");
    button_delete = document.getElementById("key0");
    display = document.getElementById("display");
    display.value = "";
}



function but1(){
    document.getElementById("display").innerHTML = "1";
}







function elements_key() {
    button_1.value = 1;




    button_2.value = 2;
    button_3.value = 3;
    button_4.value = 4;
    button_5.value = 5;
    button_6.value = 6;
    button_7.value = 7;
    button_8.value = 8;
    button_9.value = 9;
    button_0.value = 0;
}

function display_show() {
    document.getElementById("display").innerHTML = display;

}

function element() {
    display = button_1;
    display_show();


}