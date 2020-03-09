function get_value(type, selector) {
    get_element(type, selector).value;
}

function set_hidden(type, selector, hidden) {
    get_element(type, selector).hidden = hidden;
}

function send_notification(type, selector, message) {
    get_element(type, selector, message).innerHTML = message;
}

function set_class_name(type, selector, class_name) {
    get_element(type, selector, class_name).className = class_name;

}

function hide_message(element_id) {
    set_hidden("id", element_id, true);
}

function wait(func, element_id, time) {
    setTimeout(function () {
        func(element_id);
    }, time);
}