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
function key3() {
    display.value = display.value + "3";
    display.innerHTML = display.value;
}
function key4() {
    display.value = display.value + "4";
    display.innerHTML = display.value;
}
function key5() {
    display.value = display.value + "5";
    display.innerHTML = display.value;
}
function key6() {
    display.value = display.value + "6";
    display.innerHTML = display.value;
}
function key7() {
    display.value = display.value + "7";
    display.innerHTML = display.value;
}
function key8() {
    display.value = display.value + "8";
    display.innerHTML = display.value;
}
function key9() {
    display.value = display.value + "9";
    display.innerHTML = display.value;
}
function key0() {
    display.value = display.value + "0";
    display.innerHTML = display.value;
}


// Арефметические знаки

function sum2() {
    result = +display.value;
    ask_next_digit();

}

function ask_next_digit() {
    display.value = ""
}



function clean() {
    result = display.value= "";
    display.innerHTML = result;
}

function minus() {
    result = -display.value;
    ask_next_digit(); //когда одно значение больше другого и значение больше идет первым пишет (-1)
}

function multiply() {
    result =   display * result;
    ask_next_digit();

}




function calculate_result() {
    result = +result + +display.value;
    display.innerHTML = result;
}

