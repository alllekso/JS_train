let user_role;
let user_pass;

function start_login() {
    //проверка существующего пользователя
    user_role = prompt('Кто там?');

    if (user_role === 'Admin') {
        user_pass = prompt("Enter pass")
    }
    else if (user_role === 'Alexey') {
        alert("Hello, " + user_role)
    }
    else alert("I dont know You");


    //проверка пароля
    if (user_pass === "I boss here") {
        alert("Welcome!")
    }
    else {
        alert("Wrong pass, get out here")
    }
}

function show_login_button() {
    document.getElementById("login_input").hidden = false;
}
