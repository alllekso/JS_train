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
let result;



function display_result() {
     document.getElementById("display").innerHTML= result;

}
function summa(){
    // a = prompt("введите первое значение", );
    // a = prompt("введите первое значение", );
    a = 6;
    b = 2;
    sum = (+a + +b);
    //alert('результат добавления равняется ' + sum );
    result = (a + " + " + b + " = " +sum);
    display_result();
}



function minus() {
    a = 5;
    b = 3;
    sum_2 = (+a - +b);
    //alert('результат вычитания равняется ' +  sum_2);
    result = (a + " - " + b + " = " +sum_2);
    display_result();

}

function multi() {
    a = 4;
    b = 2;
    sum_3 = (a * b);
   // alert('рузультат умножения равняется ' + sum_3);
    result = (a + " * " + b + " = " +sum_3);
    display_result();
}

function collbeack() {
    summa();
    setTimeout(1000);
    minus();
    multi();
}