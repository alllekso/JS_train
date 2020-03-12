let first_digit;
let second_digit;
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

function sum() {
    action = "sum";
    result = input;
    save_history(input, " + ");

    input = "";

}

function save_history(log_data_1, log_data_2) {
    history_log = history_log + log_data_1 + log_data_2;
    display_history.innerHTML = history_log;

}

function key1() {
    input = Number(input + "1");
    display_element.innerHTML = input;


}
function key2() {
    input = input + "2";
    display_element.innerHTML = input;

}
function key3() {
    input =  input + "3";
    display_element.innerHTML =  input;
}
function key4() {
    display_element.value =  input + "4";
    display_element.innerHTML =  input;
}
function key5() {
    input =  input + "5";
    display_element.innerHTML = input;
}
function key6() {
    input =  input + "6";
    display_element.innerHTML =  input;
}
function key7() {
    input =  input + "7";
    display_element.innerHTML =  input;
}
function key8() {
    input =  input + "8";
    display_element.innerHTML =  input;
}
function key9() {
    input =  input + "9";
    display_element.innerHTML =  input;
}
function key0() {
    input =  input + "0";
    display_element.innerHTML =  input;
}


// Арефметические знаки



function ask_next_digit() {
    input = ""
}



function clean() {
    result = input = "";
    display_element.innerHTML = result;
}

function minus() {
    action = "minus";
    result = input;
    ask_next_digit();
}

function multiply() {
    action = "multiply";
    result = input;
    ask_next_digit();
}

function division() {
    action = "division";
    result = input;
    ask_next_digit();
}



function calculate_result() {
    switch (action) {
        case "sum":
            result = result + input;
            display_element.innerHTML = result;
            save_history(input, " = ");
            save_history(result, "");

            break;

        case "minus":
            result = result - input;
            display_element.innerHTML = result;
            break;

        case "multiply":
            result = result * input;
            display_element.innerHTML = result;
            break;

        case "division":
            result = result / input;
            display_element.innerHTML = result;
            break;


    }


}

