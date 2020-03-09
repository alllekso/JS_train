let action;
let user_nickname;
let password;
let confirm_password;

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
    hide_element("class", "start_login_button");
    hide_element("class", "sign_up_button");
    show_element("class", "sign_up_login_form");
    setTimeout(ask_nickname, 100);
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
    if (name_check === false) {
        check_name();
    } else if (pass_check === false) {
        check_pass();
    } else alert("you logged in");

}

function next_sign_up_step() {
    if (name_check === false) {
        check_name();
    } else if (pass_check === false) {
        check_pass();

    } else if (confirm_pass_check === false) {
        check_confirm_pass();
    } else final_sign_up_check();
}

function check_name() {
    user_nickname = get_value("id", "name");
    name_validation();
}

function name_validation() {
    name_check = false;
    show_element("id", "name_notifications_field");

    if (user_nickname === 'Lex') {
        send_notification("id", "name_notifications_field", "Name accepted");
        set_class_name("id", "name_notifications_field", "success_message");
        wait(hide_message, "name_notifications_field", 2000);
        show_element("class", "pass_group");
        return name_check = true;

    } else if (user_nickname === "") {
        notifications_field.innerHTML = 'At first enter your name';
        notifications_field.className = 'error_message';
    } else {
        notifications_field.innerHTML = 'User not found';
        notifications_field.className = 'error_message';
    }
}

function check_pass() {
    password = get_value("id", "pass");
    notifications_field = get_element("id", "pass_notifications_field");
    pass_check = false;
    pass_check = password_validation(password);
}

function ask_confirm_pass() {
    show_element("class", "confirm_pass_group");
}

function check_confirm_pass() {
    confirm_pass_check = false;
    notifications_field = get_element("id", "confirm_pass_notifications_field");
    password = get_value("id", "pass");
    confirm_password = get_value("id", "confirm_pass");
    password_validation(confirm_password);
    compare_passwords();

    if (
        password_validation(confirm_password) === true
        && compare_passwords() === true
    ) {
        confirm_pass_check = true;
        next_step();
    }
}

function compare_passwords() {
    notifications_field = get_element("id", "confirm_pass_notifications_field");
    if (password === confirm_password) {
        return true;
    } else {
        notifications_field.innerHTML = "Confirm password does not match the Password";
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


