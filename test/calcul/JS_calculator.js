// let number1;
// let number2;
// let result;
// let key;
// let display;
//
// function show_display() {
//     display = document.getElementById("display_first")
//
// }
//
//
//
// function sum() {
//     number1 = document.getElementById("first").value;
//     number2 = document.getElementById("second").value;
//     result = +number1 + +number2 ;
//     show_result();
// }
//
// function show_result() {
//     document.getElementById("display").value = result;
// }
//
// function subtraction() {
//     number1 = document.getElementById("first").value;
//     number2 = document.getElementById("second").value;
//     result = +number1 - +number2 ;
//     show_result();
// }
//
// function division() {
//     number1 = document.getElementById("first").value;
//     number2 = document.getElementById("second").value;
//     result = +number1 / +number2 ;
//     show_result();
// }
//
// function multiplication() {
//     number1 = document.getElementById("first").value;
//     number2 = document.getElementById("second").value;
//     result = +number1 * +number2 ;
//     show_result();
// }
//
//
// function key5() {
//     key = +5;
//
//
//
//
// }
//
// // function key6() {
// //     key = +6;
// //     document.getElementById("second").value = key;
// // }
// // function key7() {
// //     key = +7;
// //     document.getElementById("second").value = key;
// // }
// // function key8() {
// //     key = +8;
// //     document.getElementById("second").value = key;
// // }
// // function key9() {
// //     key = +9;
// //     document.getElementById("second").value = key;
// // }
// // function key0() {
// //     key = +0;
// //     document.getElementById("second").value = key;
// }


"use strict";

let a;
let b;
let sum;
let sum_2;
let sum_3;
let result_1;
let result_2;
let result_3;
let history = "";


function collbeack() {
    summa();
}
function collbeack_2() {
    minus();
}
function collbeack_3() {
    multi();
}



function display_result() {
    document.getElementById("display").innerHTML= history;

}


function summa(){
    a = 6;
    b = 2;
    sum = (+a + +b);
    result_1 = (a + " + " + b + " = " +sum);
    history = history + result_1 + "<br>";
    display_result();
}

function minus() {
    a = 5;
    b = 3;
    sum_2 = (+a - +b);
    result_2 = (a + " - " + b + " = " +sum_2);
    history = history + result_2 + "<br>";
    display_result();
}

function multi() {
    a = 4;
    b = 2;
    sum_3 = (a * b);
    result_3 = (a + " * " + b + " = " +sum_3);
    history = history + result_3 + "<br>";
    display_result();
}

// let a = "ku";
// a = a + " kareku";
// alert(a);