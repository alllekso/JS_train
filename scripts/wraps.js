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

function get_value(type, selector) {
    return get_element(type, selector).value;
}

function show_element(type, selector) {
    get_element(type, selector).hidden = false;
}

function hide_element(type, selector) {
    get_element(type, selector).hidden = true;
}

function send_notification(type, selector, message) {
    get_element(type, selector, message).innerHTML = message;
}

function set_class_name(type, selector, class_name) {
    get_element(type, selector, class_name).className = class_name;

}

function hide_message(element_id) {
    hide_element("id", element_id, true);
}

function wait(func, element_id, time) {
    setTimeout(function () {
        func(element_id);
    }, time);
}