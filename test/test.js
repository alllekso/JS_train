let first_digit;
let second_digit;
let result;

function sum() {
    first_digit = +document.getElementById("first_digit").value;
    second_digit = +document.getElementById("second_digit").value;
    result = first_digit + second_digit;
    console.log(result);
}

function subtraction() {
    first_digit = +document.getElementById("first_digit").value;
    second_digit = +document.getElementById("second_digit").value;
    result = first_digit - second_digit;
    document.getElementById("result").innerHTML = result;
}


//  калькулятор

function keys1() {
   let digit = +document.getElementById("1").innerHTML;
    document.getElementById("display").innerHTML = result;
}

function keys2() {
    let digit = +document.getElementById("2").innerHTML;
    document.getElementById("display").innerHTML = result;
}
function keys3() {
    let digit = +document.getElementById("3").innerHTML;
    document.getElementById("display").innerHTML = result;
}
function keys4() {
    let digit = +document.getElementById("4").innerHTML;
    document.getElementById("display").innerHTML = result;
}
function keys5() {
    let digit = +document.getElementById("5").innerHTML;
    document.getElementById("display").innerHTML = result;
}