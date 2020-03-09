//не проходит валидация имени. фолс
let action;
let user_nickname;
let password;
let confirm_password = false;

let pass_field;
let notifications_field;
let greetings_message;

let name_check = false;
let pass_check = false;
let confirm_pass_check = false;


//

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
    set_hidden("class", "start_login_button", true);
    set_hidden("class", "sign_up_button", true);
    set_hidden("class", "sign_up_login_form", false);
    setTimeout(ask_nickname, 100);
}

function ask_nickname() {
    set_hidden("class", "confirm_button", false);
    send_notification("class","chicken_message", greetings_message);
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
    if (name_check === false) {
        check_name();
    } else if (pass_check === false) {
        ask_pass();
    } else alert("you logged in");

}

function next_sign_up_step() {
    if (name_check === false) {
        check_name();
    } else if (pass_check === false) {
        check_pass();

    }
    else if (confirm_pass_check === false) {
        check_confirm_pass();
    }
}

function check_name() {
    user_nickname = get_element("id", "name").value;
    name_validation();
}

function name_validation() {
    set_hidden("id", "name_notifications_field", false);

    if (user_nickname === 'Lex') {
        send_notification("id", "name_notifications_field", "Name accepted");
        set_class_name("id", "name_notifications_field", "success_message");
        wait(hide_message, "name_notifications_field", 2000);
        name_check = true;
        set_hidden("class", "pass_group", false);

    } else if (user_nickname === "") {
        notifications_field.innerHTML = 'At first enter your name';
        notifications_field.className = 'error_message';
    } else {
        notifications_field.innerHTML = 'User not found';
        notifications_field.className = 'error_message';
    }
}

function ask_pass() {
    check_pass();
}

function check_pass() {
    password = document.getElementById("pass").value;
    notifications_field = document.getElementById("pass_notifications_field");
    notifications_field.hidden = false;
    pass_validation(password);
}

function ask_confirm_pass() {
    document.querySelector(".confirm_pass_group").hidden = false;
}

function check_confirm_pass() {
    confirm_password = document.getElementById("confirm_pass").value;
    pass_validation(confirm_password);

    notifications_field = document.getElementById("confirm_pass_notifications_field");
    notifications_field.hidden = false;
    if (password === confirm_password){
        confirm_pass_check = true;
        save_user();
    }
    else {
        notifications_field.innerHTML = "Confirm password does not match the Password";
    }
}

function pass_validation() {

    notifications_field.innerHTML = "";
    // const password = "";
    // console.log(password.match(/\s+/));
    if (password === "") {
        notifications_field.innerHTML = "Pass field is required!";
        notifications_field.className = 'error_message'
    } else if (password.length < 3) {
        notifications_field.innerHTML = "Min pass length = 3";
        notifications_field.className = 'error_message'
    } else if (password.length > 11) {
        notifications_field.innerHTML = "Max pass length = 10";
        notifications_field.className = 'error_message'
    } else if (+(password)) {
        notifications_field.innerHTML = "Pass can not contain digits only";
        notifications_field.className = 'error_message'
    } else {
        pass_check = true;
        switch (action) {
            case "sign up": ask_confirm_pass();
            break;
            case "login": next_step();
            break;
        }
    }
}

function create_user() {
    function new_user() {
        this.nickname = user_nickname;
        this.password = password;
    }

    return new_user();
}

function save_user() {
    alert("saved");
}


function get_element(type, selector) {
    let element;
    switch (type) {
        case "class":
            element = document.querySelector("." + selector);
            break;
        case "id":
            element = document.getElementById(selector);
            break;
        case  "var":
            element = selector;
            break;
    }
    return element;
}

