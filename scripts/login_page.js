let user_nickname;
let password;
let confirm_password;
let action;
let notifications_field;
let greetings_message;

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
    hide_element("class", "start_login_button");
    hide_element("class", "sign_up_button");
    show_element("class", "sign_up_login_form");
    setTimeout(ask_nickname, 0);
}

function ask_nickname() {
    show_element("class", "confirm_button");
    send_notification("class", "chicken_message", greetings_message);
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
    if (check_name() === false) {
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
    user_nickname = get_value("id", "name");
    notifications_field = get_element("id", "name_notifications_field");
    show_element("id", "name_notifications_field");
    set_element_style("id", "name_notifications_field", "error_message");
    name_validation_message();
    return name_validation();
}

function name_validation() {
    if (user_nickname === 'Lex') {
        show_element("class", "pass_group");
        return true;
    }
    else return false;
}

function name_validation_message() {
    if (user_nickname === 'Lex') {
        validation_message("Name accepted");
        set_element_style("id", "name_notifications_field", "success_message");
        wait(hide_message, "name_notifications_field", 2000);
    } else if (user_nickname === "") {
        validation_message("At first enter your name");
    } else {
        validation_message("User not found");
    }
}

function check_pass(password) {
    password = get_value("id", "pass");
    notifications_field = get_element("id", "pass_notifications_field");
    notifications_field.innerHTML = "";
    pass_validation_message(password);
    return password_validation(password);
}

function ask_confirm_pass() {
    show_element("class", "confirm_pass_group");
}

function check_confirm_pass() {
    notifications_field = get_element("id", "confirm_pass_notifications_field");
    notifications_field.innerHTML = "";
    password = get_value("id", "pass");
    confirm_password = get_value("id", "confirm_pass");
    compare_passwords();
    pass_validation_message(confirm_password);
    return password_validation(confirm_password);
}

function compare_passwords() {
    notifications_field = get_element("id", "confirm_pass_notifications_field");
    if (password === confirm_password) {
        notifications_field.innerHTML = "";
        return true;
    } else {
        validation_message("Confirm password does not match the Password");
    }
}

function final_sign_up_check() {
    user_nickname = get_value("id", "name");
    password = get_value("id", "pass");
    confirm_password = get_value("id", "confirm_pass");
    if (
        name_validation() === true
        && password_validation(password) === true
        && password_validation(confirm_password) === true
        && password === confirm_password
    ) {
        save_user();
    } else {
        next_step();
        // alert("some error");
    }
}

function password_validation(password) {
    // const password = "";
    // console.log(password.match(/\s+/));
    if (password === "") {
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

function pass_validation_message(password){

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
        switch (action) {
            case "sign up":
                ask_confirm_pass();
                break;
            case "login":
                next_step();
                break;
        }
        return true;
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


