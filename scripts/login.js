let user_role;
let user_pass;
let notifications_field;
let flamingo_pick_up = "Who's there?";
let name_passed = false;

function login() {
    if (name_passed === false){
        check_user_name();
    }
    else {
        check_pass();
    }

}

function show_login_form() {
    document.getElementById("login_form_is_hidden").hidden = false;
    document.getElementById("start_login_button").hidden = true;
    setTimeout(ask_name, 1500);
}

function ask_name() {
    document.getElementById("hello_message").innerHTML = flamingo_pick_up;
    // document.getElementsByClassName('login_group')[0].hidden = false;
    // document.getElementsByClassName('form_button')[0].hidden = false;
    document.querySelector(".login_group").hidden = false;
    document.querySelector(".form_button").hidden = false;
}

function check_user_name() {
    user_role = document.getElementById("name").value;
    notifications_field = document.getElementById("name_notifications_field");
    notifications_field.hidden = false;

    if (user_role === 'Admin' || user_role === 'Lex') {
        document.getElementsByClassName('pass_group')[0].hidden = false;
        notifications_field.innerHTML = 'Name accepted';
        notifications_field.className = 'success_message';
        wait(hide_message, "name_notifications_field", 2000);
        name_passed = true;

    } else if (user_role === 'Hacker') {
        notifications_field.innerHTML = 'You shall not pass!';
        notifications_field.className = 'warning_message';
    } else if (user_role === "") {
        notifications_field.innerHTML = 'At first enter your name';
        notifications_field.className = 'error_message';
    } else {
        notifications_field.innerHTML = 'User not found';
        notifications_field.className = 'error_message';
    }

}

function check_pass() {
    user_pass = document.getElementById("pass").value;
    notifications_field = document.getElementById("pass_notifications_field");
    notifications_field.hidden = false;
    if (user_pass === "") {
        notifications_field.innerHTML = "Pass field is required!";
        notifications_field.className = 'error_message'
    }
    if (validate(user_pass)) {

    }
}

function validate(user_pass) {
    notifications_field.innerHTML = "";
    const value = "";
    console.log(value.match(/\s+/));
    if (user_pass.length < 3) {
        notifications_field.innerHTML = "Min pass length = 3";
        notifications_field.className = 'error_message'
    }

    else if (user_pass.length > 11) {
        notifications_field.innerHTML = "Max pass length = 10";
        notifications_field.className = 'error_message'
    }

    else if (+(user_pass)){
        notifications_field.innerHTML = "Pass can not contain digits only";
        notifications_field.className = 'error_message'
    }
}


function hide_message(element_id) {

    document.getElementById(element_id).hidden = true;
}

function wait(func, element_id, time) {
    setTimeout(function () {
        func(element_id);
    }, time);
}

