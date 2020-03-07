//не проходит валидация имени. фолс
let action;
let user_nickname;
let user_pass;

let pass_field;
let notifications_field;
let greetings_message;

let name = false;
let password = false;
let confirm_password = false;

function sign_up() {
    action = "sign up";
    greetings_message = "Hello there! <br> Introduce yourself =]";
    show_auth_form();
}

function login() {
    action = "login";
    greetings_message = "Who's there?";
    show_auth_form();
}

function show_auth_form() {

    fields_displaying_manager("class", "start_login_button", true);
    fields_displaying_manager("class", "sign_up_button", true);
    fields_displaying_manager("class", "sign_up_login_form", false);
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
    pass_field = document.querySelector('.pass_group');
    notifications_field.hidden = false;

    if (user_nickname === 'Lex') {
        pass_field.hidden = false;
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


function ask_confirm_pass() {
    document.querySelector(".confirm_pass_group").hidden = false;
    document.querySelector(".confirm_pass_notifications_field").hidden = false;
    next_step();
}

function check_pass() {
    user_pass = document.getElementById("pass").value;
    notifications_field = document.getElementById("pass_notifications_field");
    notifications_field.hidden = false;
    pass_validation(user_pass);
}

function check_confirm_pass() {
    confirm_password = document.getElementById("confirm_pass").value;
    notifications_field = document.getElementById("confirm_pass_notifications_field");
    notifications_field.hidden = false;
    pass_validation(confirm_password);
    password = confirm_password ? save_user() : notifications_field.innerHTML = "Confirm password does not match the Password";
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
    } else {
        password = true;
        next_step();
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
        name === true ? pass_field.hidden = true : check_user_nickname();
    } else if (password === false) {
        // password === true ? check_confirm_pass() : check_pass();

        if (password === true) {
            ask_confirm_pass();
        } else check_pass();

    } else if (confirm_password === false) {
        check_confirm_pass();
    }
}

function hide_message(element_id) {

    // document.getElementById(element_id).hidden = true;
    fields_displaying_manager("id", element_id, true);
}

function wait(func, element_id, time) {
    setTimeout(function () {
        func(element_id);
    }, time);
}

function create_user() {
    function new_user() {
        this.nickname = user_nickname;
        this.password = user_pass;
    }

    return new_user();
}

function save_user() {
    alert("saved");
}

function get_selector_value(type, selector) {
    let selector_value;
    switch (type) {
        case "class": selector_value = document.querySelector("." + selector);
        break;
        case "id": selector_value = document.getElementById(selector);
        break;
    }
    return selector_value;
}

function fields_displaying_manager(type, selector, hidden) {
    get_selector_value(type, selector).hidden = hidden;
}