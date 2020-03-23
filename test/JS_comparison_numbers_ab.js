// let a = 2;
// let b = 8;
// let c = 7;
// // alert( "привет");
// // какое из чисел больше?
// function test() {
//     if (a > b &&  a > c ){
//         alert( "a ");
//     }else if( b > a && b > c){
//         alert( "b" );
//     }else if ( c > b && c > a ){
//         alert ( "c ");
//     } else{
//         alert("ничего");
//     }
// }


let a;
let b;
let c;

function test() {
    if ( a === undefined){
        a = 2;
        alert(a = 2);
    }else if (b === undefined){
       b = 1;
       alert(b = 1);
    }else if (c === undefined){
       c = 3;
       alert(c = 3);
    } else{
        alert("Все выполнено");
    }
}
