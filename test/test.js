let first_digit;
let second_digit;
let result;
let display;
let action;
let meaning;




function connect_display() {
    display = document.getElementById("display");
    display.value = meaning = "";
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
    meaning = meaning + "1";
    display.innerHTML = meaning;
}
function key2() {
    meaning =  meaning + "2";
    display.innerHTML =  meaning;
}
function key3() {
    meaning =  meaning + "3";
    display.innerHTML =  meaning;
}
function key4() {
    display.value =  meaning + "4";
    display.innerHTML =  meaning;
}
function key5() {
    meaning =  meaning + "5";
    display.innerHTML = meaning;
}
function key6() {
    meaning =  meaning + "6";
    display.innerHTML =  meaning;
}
function key7() {
    meaning =  meaning + "7";
    display.innerHTML =  meaning;
}
function key8() {
    meaning =  meaning + "8";
    display.innerHTML =  meaning;
}
function key9() {
    meaning =  meaning + "9";
    display.innerHTML =  meaning;
}
function key0() {
    meaning =  meaning + "0";
    display.innerHTML =  meaning;
}


// Арефметические знаки

function sum2() {
    action = "sum";
    result = meaning;
    ask_next_digit();

}

function ask_next_digit() {
    meaning = ""
}



function clean() {
    result = meaning = "";
    display.innerHTML = result;
}

function minus() {
    action = "minus";
    result = meaning;
    ask_next_digit();
}

function multiply() {
    action = "multiply";
    result = meaning;
    ask_next_digit();
}

function division() {
    action = "division";
    result = meaning;
    ask_next_digit();
}



function calculate_result() {
    switch (action) {
        case "sum":
            result = +result + +meaning;
            display.innerHTML = result;
            break;

        case "minus":
            result = result - meaning;
            display.innerHTML = result;
            break;

        case "multiply":
            result = result * meaning;
            display.innerHTML = result;
            break;

        case "division":
            result = result / meaning;
            display.innerHTML = result;
            break;


    }


}

