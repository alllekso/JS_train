"use strict";
let choose_input;
let choose_side_button = document.querySelector(".choose_side_button");
let user_side;
let black_side_img = document.querySelector(".black_side");
let white_side_img = document.querySelector(".white_side");
let black_side_music = document.getElementById("audio");
let white_side_music = document.getElementById("audio2");
let music;


function get_user_choose() {
    choose_input = document.querySelector(".choose_side_input").value;
    calculate_user_side();
}

function calculate_user_side() {
    if (+choose_input % 2 > 0) {
        user_side = "White";
        music = white_side_music;
        white_side_img.hidden = false;
        black_side_img.hidden = true;
    }
    else {
        user_side = "Black";
        music = black_side_music;
        black_side_img.hidden = false;
        white_side_img.hidden = true;
    }
}


function play() {
    music.play();
}

function stop_playing() {
    music.pause();
    music.currentTime = 0;
}

black_side_img.addEventListener("mousemove", play);
white_side_img.addEventListener("mousemove", play);
choose_side_button.addEventListener("click", stop_playing);