let user_role;
let user_pass;
let notifications_field;
let flamingo_pick_up = "Who's there?";

function show_login_login_form() {
    document.getElementById("login_form_is_hidden").hidden = false;
    document.getElementById("start_login_button").hidden = true;
    setTimeout(ask_name,1000);
}

function ask_name() {
document.getElementById("hello_message").innerHTML = flamingo_pick_up;
}

function check_is_admin() {
    user_role = document.getElementById("name").value;
    notifications_field = document.getElementById("name_error_messages");
    notifications_field.hidden = false;

    if (user_role === 'Admin' || user_role === 'Lex') {
        document.getElementById("pass_field").hidden = false;
        notifications_field.innerHTML = 'Name accepted';
        notifications_field.className = 'success_message';
        wait(hide_message,"name_error_messages", 1500);
    }
    else if (user_role === 'Hacker' ){
        notifications_field.innerHTML = 'You shall not pass!';
        notifications_field.className = 'warning_message';
    }
    else if (user_role === ""){
        notifications_field.innerHTML = 'At first enter your name';
        notifications_field.className = 'error_message';
    }
    else {
        notifications_field.innerHTML = 'User not found';
        notifications_field.className = 'error_message';
    }
}
function hide_message(element_id) {

   document.getElementById(element_id).hidden = true;
}

function wait(func, element_id, time) {
    setTimeout(function (){func(element_id);}, time);
}