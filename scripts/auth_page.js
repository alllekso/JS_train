let user_nickname;
let password;
let confirm_password;
let action;
let notifications_field;
let greetings_message;
let start_name_check

function sign_up() {
    action = "sign up";
    greetings_message = "Hello there! <br> Introduce yourself 😄";
    show_auth_form();
}

function login() {
    action = "login";
    greetings_message = "Who's there?";
    show_auth_form();
}

function show_auth_form() {
    hide_element("start_login_button", "class");
    hide_element("sign_up_button", "class");
    show_element("sign_up_login_form", "class");
    setTimeout(ask_nickname, 50);
}

function ask_nickname() {
    send_notification("chicken_message", greetings_message, "class");
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
    if (start_name_check === false){
        start_name_check === true;
    }
    else if (check_name() === false) {
        check_name();
    } else if (check_pass() === false) {
        check_pass();
    } else alert("you logged in");
}

function next_sign_up_step() {
    if (check_name() === false) {
        check_name();
    } else if (check_pass() === false) {
        check_pass();
    } else if (check_confirm_pass() === false) {
        check_confirm_pass();
    } else final_sign_up_check();
}

function check_name() {
    user_nickname = get_value("name");
    notifications_field = get_element("name_notifications_field");
    show_element("name_notifications_field");
    name_validation_message();
    return name_validation();
}

function name_validation() {
    if (user_nickname === 'Lex') {
        show_element("pass_group", "class");
        return true;
    } else return false;
}

function name_validation_message() {
    if (user_nickname === 'Lex') {
        validation_message("Name accepted");
        set_element_style("name_notifications_field", "success_message");
        wait(hide_message, "name_notifications_field", 2000);
    } else if (user_nickname === "") {
        validation_message("At first enter your name");
    } else {
        validation_message("User not found");
    }
}

function check_pass() {
    password = get_value("pass");
    notifications_field = get_element("pass_notifications_field");
    notifications_field.innerHTML = "";
    pass_validation_message(password);
    return password_validation(password);
}

function ask_confirm_pass() {
    show_element("confirm_pass_group", "class");
}

function check_confirm_pass() {
    ask_confirm_pass();
    confirm_password = get_value("confirm_pass");
    notifications_field = get_element("confirm_pass_notifications_field");
    notifications_field.innerHTML = "";
    compare_passwords();
    pass_validation_message(confirm_password);
    return password_validation(confirm_password);
}

function compare_passwords() {
    notifications_field = get_element("confirm_pass_notifications_field");
    if (password === confirm_password) {
        validation_message("");
        return true;
    } else {
        validation_message("Confirm password does not match the Password");
    }
}

function final_sign_up_check() {
    if (
        name_validation() === true
        && password_validation(password) === true
        && password_validation(confirm_password) === true
        && compare_passwords() === true
    ) {
        save_user();
    } else {
        // alert("some error");
    }
}

function password_validation(password) {
    // console.log(password.match(/\s+/));
    if (password === undefined || password === "") {
        return false;
    } else if (password.length < 3) {
        return false;
    } else if (password.length > 11) {
        return false;
    } else if (+(password)) {
        return false;
    } else {
        return true;
    }
}

function pass_validation_message(password) {
    // console.log(password.match(/\s+/));
    if (password === "") {
        validation_message("Pass field is required!");
    } else if (password.length < 3) {
        validation_message("Min pass length = 3");
    } else if (password.length > 11) {
        validation_message("Max pass length = 10");
    } else if (+(password)) {
        validation_message("Pass can not contain digits only");
    } else validation_message("");

}




function create_user() {
    let user = {
        id: 1,
        name: user_nickname,
        pass: password,
    };

    console.log("saved");
    return user;
}

function save_to_database() {

}


function save_user() {
    console.log("saved");
}

//https://learn.javascript.ru/indexeddb
let openRequest = indexedDB.open("users_DB", 1);



