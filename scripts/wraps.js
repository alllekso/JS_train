function get_element(selector, type = "id") {
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
        default:
            element = document.querySelector("." + selector);
            break;
    }
    return element;
}

function get_value(selector, type) {
    return get_element(selector, type).value;
}

function show_element(selector, type) {
    get_element(selector, type).hidden = false;
}

function hide_element(selector, type) {
    get_element(selector, type).hidden = true;
}

function send_notification(selector, message, type) {
    get_element(selector, message, type).innerHTML = message;
}

function validation_message(message) {
    notifications_field.innerHTML = message;
}

function set_element_style(selector, style, type,) {
    get_element(selector, type).className = style;

}

function hide_message(element_id) {
    hide_element(element_id, "id", true);
}

function wait(func, element_id, time) {
    setTimeout(function () {
        func(element_id);
    }, time);
}