//не проходит валидация имени. фолс
let action;
let user_nickname;
let user_pass;
let notifications_field;
let greetings_message;
let name = false;
let password = false;
let confirm_password = false;

function sign_up() {
    action = "sign up";
    greetings_message = "Hello there! <br> Introduce yourself =]";
    show_sign_up_form();
}

function login() {
    action = "login";
    greetings_message = "Who's there?";
    show_login_form();
}

function show_sign_up_form() {
    document.querySelector(".start_login_button").hidden = true;
    document.querySelector(".sign_up_button").hidden = true;
    document.querySelector(".sign_up_login_form").hidden = false;
    setTimeout(ask_nickname, 100);
    ask_nickname();
}

function show_login_form() {
    document.querySelector(".start_login_button").hidden = true;
    document.querySelector(".sign_up_login_form").hidden = false;
    setTimeout(ask_nickname, 100);
}

function ask_nickname() {
    document.querySelector(".chicken_message").innerHTML = greetings_message;
    document.querySelector(".confirm_button").hidden = false;
}

function name_validation() {
    user_nickname = document.getElementById("name").value;
    notifications_field = document.getElementById("name_notifications_field");
    notifications_field.hidden = false;
}

function check_user_nickname() {
    user_nickname = document.getElementById("name").value;
    notifications_field = document.getElementById("name_notifications_field");
    notifications_field.hidden = false;

    user_nickname = true; //??

    if (user_nickname === 'Admin' || user_nickname === 'Lex') {
        document.getElementsByClassName('pass_group')[0].hidden = false;
        notifications_field.innerHTML = 'Name accepted';
        notifications_field.className = 'success_message';
        wait(hide_message, "name_notifications_field", 2000);
        name = true;

    } else if (user_nickname === 'Hacker') {
        notifications_field.innerHTML = 'You shall not pass!';
        notifications_field.className = 'warning_message';
    } else if (user_nickname === "") {
        notifications_field.innerHTML = 'At first enter your name';
        notifications_field.className = 'error_message';
    } else {
        notifications_field.innerHTML = 'User not found';
        notifications_field.className = 'error_message';
    }
}


function ask_pass() {
    document.querySelector(".confirm_pass_notifications_field").hidden = false;
}

function check_pass() {
    user_pass = document.getElementById("pass").value;
    notifications_field = document.getElementById("pass_notifications_field");
    notifications_field.hidden = false;
    pass_validation(user_pass);
    if (action === "login"){
        //TO DO login-pass__matching
    }
}

function check_confirm_pass() {
    user_pass = document.getElementById("pass").value;
    notifications_field = document.getElementById("confirm_pass_notifications_field");
    notifications_field.hidden = false;
}

function pass_validation(user_pass) {

    notifications_field.innerHTML = "";
    const value = "";
    console.log(value.match(/\s+/));
    if (user_pass === "") {
        notifications_field.innerHTML = "Pass field is required!";
        notifications_field.className = 'error_message'
    } else if (user_pass.length < 3) {
        notifications_field.innerHTML = "Min pass length = 3";
        notifications_field.className = 'error_message'
    } else if (user_pass.length > 11) {
        notifications_field.innerHTML = "Max pass length = 10";
        notifications_field.className = 'error_message'
    } else if (+(user_pass)) {
        notifications_field.innerHTML = "Pass can not contain digits only";
        notifications_field.className = 'error_message'
    }
}


function next_step() {
    switch (action) {
        case "login":
            next_login_step();
            break;
        case  "sign up":
            next_sign_up_step();
            break;
    }
}

function next_login_step() {
    if (name === false) {
        check_user_nickname();
    } else {
        check_pass();
    }
}

function next_sign_up_step() {
    if (name === false) {
        name_validation();
    } else if (password === false) {
        check_pass();
    } else if (confirm_password === false) {

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

