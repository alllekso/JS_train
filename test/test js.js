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




function comparing() {
    if (dick_1 > dick_2) {
        message = " Вася, у тебя больше чем у Пети на " +(dick_1 - dick_2) + "cm" ;
    }else if(dick_1 < dick_2) {
        message = "Петя, у тебя больше чем у Васи на " +(dick_1 - dick_2) + "cm";
    }else {
        message = "Члены одного размера " ;
    }

}

function GO() {
    dick_1 = document.getElementById("dick_1").value;
    dick_2 = document.getElementById("dick_2").value;
    comparing();
    document.getElementById("display").innerHTML= message;
}