let first_digit;
let second_digit;
let result;
let display;

function connect_display() {
    display = document.getElementById("display");
    display.value = "";

}
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

function key1() {
display.value = display.value + "1";
display.innerHTML = display.value;
}

function key2() {
display.value = display.value + "2";
display.innerHTML = display.value;
}

function sum2() {
    result = +display.value;
    ask_next_digit();

}

function ask_next_digit() {
    display.value = ""
}

function calculate_result() {
    result = +result + +display.value;
    display.innerHTML = result;
}

