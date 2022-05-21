//Hacer una funcion que reciba arreglo de numero y 
//retorne el numero mas alto del arreglo.

//--------------------------------Ejercicio 1-------------------------------------------------------------
// function numMay (number){
//     x = number.length;
//     y = number[x-1];
//     while (x--){
//         if(number[x] > y){
//             y = number[x]
//         }
//     }
//     return y;
// };
// const num = prompt([ ]);
// const num = [0, 9, 10, 500, 8, 200 ];
// const result = numMay(num);
// console.log(result);

//------------------------------------------------Ejercicio II----------------------------------------------
// Hacer una funcion que revierta un string.
// Ejemplo "hola", "aloh"

function reverse(word){
  let newWord = "";
    for (let i =  word.length - 1; i >= 0; i --) {
 newWord += word[i];
    }
    return newWord;
}
// const words = prompt( " ")
// const result = reverse(words)
// console.log(result)

console.log(reverse("jonathan"));
//-----------------------------------Ejercicio III------------------------------------------------------

//Hacer una funcion que divida 2 numeros a y b = 0
//regresar un mensaje de error
//Ejempl 10/2 = 5
// 8/0 = error


const a = 8;
const b = 2;

function division (a, b){
    if(a / b >= 0){
        console.log(a / b);
    } 
    if(a/b <= 0){
        console.log("error");
    }
}

const result = division(a,b)

console.log(result);
