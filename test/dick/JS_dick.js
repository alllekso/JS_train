// let name = prompt('Как тебя зовут?', );
// //
// // console.log(`Привет, ` +name );

// let year = prompt('В каком году?', '');
// //
// // if (year < 2015) {
// //     console.log( 'Это слишком рано...' );
// // } else if (year > 2015) {
// //     console.log( 'Это поздновато' );
// // } else if (year === 2015) {
// //     console.log( 'Верно!' );
// // }

// let age = prompt("Сколько тебе лет?", '18');
// let message = (age < 3) ? 'ой, малыш':
//     (age < 18) ? 'Привет!':
//          'Здравствуйте!';
//
// alert( message );

// let name = prompt('Как меня зовут?', '');
//
// if (name === 'Катя') {
//     console.log( 'Да, это верно' );
// } else {
//     console.log( 'Вы не знаете(' );
// }

// let numb = prompt('Введите число', '');
//  if(numb > 0 ) {
//      console.log( 'Позитивное число' );
//  }
//
//  else if (numb < 0 ) {
//     console.log( 'Отицательное число' );
// }
//  else {
//      console.log( 'нуль' );
//  }



let dick_1;
let dick_2;
let message;

let sum;


function comparing() {
    if (dick_1 > dick_2) {
        message = " Вася, у тебя больше чем у Пети на " + Math.abs(dick_1 - dick_2) + "cm" ;
    }else if(dick_1 < dick_2) {
        message = "Петя, у тебя больше чем у Васи на " + Math.abs(dick_1 - dick_2) + "cm";
    }else {
        message = "Члены одного размера " + dick_1 + "cm" ;
    }

}


function GO() {
    dick_1 = document.getElementById("dick_1").value;
    dick_2 = document.getElementById("dick_2").value;
    comparing();
    document.getElementById("display").innerHTML= message;
}
let a = !!(2);
let b = !!(0);
let c = !!(1);
let d = !!(undefined);
// console.log(c);

if (a === true && d === false || b === true && c === true){
    // alert("шоколад")
}
else if (a === true && b === false && c === false){
    // alert("хуй")
} else alert("");
