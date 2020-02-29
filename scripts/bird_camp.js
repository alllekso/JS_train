let choose_input;
let user_side;

function get_user_choose() {
    choose_input = document.querySelector(".choose_side_input").value;
    alert(choose_input);
    // calculate_user_side();
    // show_user_side();

}

// function calculate_user_side() {
//     user_side = (choose_input % 2 > 0) ? "Black" : "White";
// }

// function calculate_user_side() {
//     if (choose_input % 2 > 0){
//         user_side = "White"
//     }
//     else user_side = "Black"
// }
//
//
// function show_user_side() {
//     if (user_side === "Black") {
//         document.querySelector(".black_side").hidden = false;
//     } else {
//         document.querySelector(".white_side").hidden = false;
//
//     }
// }



let audio = document.getElementById("mySoundClip");
 document.querySelector(".black_side").mouseenter(function() {
    audio.play();
 });
