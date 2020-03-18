let number1;
let number2;
let result;
let key;
let display;

function show_display() {
    display = document.getElementById("display_first")

}



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


function key5() {
    key = +5;




}

// function key6() {
//     key = +6;
//     document.getElementById("second").value = key;
// }
// function key7() {
//     key = +7;
//     document.getElementById("second").value = key;
// }
// function key8() {
//     key = +8;
//     document.getElementById("second").value = key;
// }
// function key9() {
//     key = +9;
//     document.getElementById("second").value = key;
// }
// function key0() {
//     key = +0;
//     document.getElementById("second").value = key;
// }
let a = 2;
let b = 1;
let summa;

function ravenstvo(a,b) {
    summa = a + b;
    alert(summa);
}