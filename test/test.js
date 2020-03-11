let first_digit;
let second_digit;
let result;

function sum() {
    first_digit = +document.getElementById("first_digit").value;
    second_digit = +document.getElementById("second_digit").value;
    result = first_digit + second_digit;
    console.log(result);
}

function subtraction() {
    first_digit = +document.getElementById("first_digit").value;
    second_digit = +document.getElementById("second_digit").value;
    result = first_digit - second_digit;
    document.getElementById("result").innerHTML = result;
}



function keys1() {
    from_get = document.getElementById("button-namb1").innerHTML;
    alert(from_get);
}
function keys2() {
    from_get = document.getElementById("button-namb2").innerHTML;
    alert(from_get);
}
function keys3() {
    from_get = document.getElementById("button-namb3").innerHTML;
    alert(from_get);
}
function keys4() {
    from_get = document.getElementById("button-namb4").innerHTML;
    alert(from_get);
}
function keys5() {
    from_get = document.getElementById("button-namb5").innerHTML;
    alert(from_get);
}