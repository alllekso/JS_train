
let result;
let display_element;
let action;
let display_value;
let input;
let display_history;
let history_log = "";




function connect_display() {
    display_element = document.getElementById("display");
    display_history = document.getElementById("history");
    display_value = display_element.value = "";
    input = display_value;

}

//  калькулятор

function key1() {
    input = Number(input + "1");
    display_element.innerHTML = input;
}

function key2() {
    input = Number(input + "2");
    display_element.innerHTML = input;
}
function key3() {
    input = Number(input + "3");
    display_element.innerHTML = input;
}
function key4() {
    input = Number(input + "4");
    display_element.innerHTML = input;
}
function key5() {
    input = Number(input + "5");
    display_element.innerHTML = input;
}
function key6() {
    input = Number(input + "6");
    display_element.innerHTML = input;
}
function key7() {
    input = Number(input + "7");
    display_element.innerHTML = input;
}
function key8() {
    input = Number(input + "8");
    display_element.innerHTML = input;
}
function key9() {
    input = Number(input + "9");
    display_element.innerHTML = input;
}
function key0() {
    input = Number(input + "0");
    display_element.innerHTML = input;
}


// Арефметические знаки
function save_history(log_data_1, log_data_2) {
    history_log = history_log + log_data_1 + log_data_2;
    display_history.innerHTML = history_log;
}


function clean() {
    result = input = "";
    display_element.innerHTML = result;
}

function sum() {
    action = "sum";
    result = input;
    save_history(input, " + ");
    input = "";
}


function multiply() {
    action = "multiply";
    result = input;
    save_history(input, " × ");
    input = "";
}
function minus() {
    action = "minus";
    result = input;
    save_history(input, " - ");
    input = "";
}

function division() {
    action = "division";
    result = input;
    save_history(input, " ÷");
    input = "";
}


function save() {
    display_element.innerHTML = result ;
    save_history(input, " = ");
    save_history(result, "<br>");
}
let all_key;
let key;


function all_key() {
    all_key = key;
    key = key1;
    key = key2;
    key = key3;
    key = key4;
    key = key5;
    key = key6;
    key = key7;
    key = key8;
    key = key9;
    key = key0;
}


function result_display() {
    display_element.innerHTML = result_display;
    calculate_result = result_display;
    result_display = result_display + all_key;
}


function calculate_result() {
    switch (action) {
        case "sum":
            result = result + input;
            save();
            result_display();
            break;

        case "minus":
            result = result - input;
           save();
           result_display();
            break;

        case "multiply":
            result = result * input;
           save();
            break;

        case "division":
            result = result / input;
            save();
            break;
    }


}

