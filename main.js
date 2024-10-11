// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. 
let numero1 = 4
function esPar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}
esPar(numero1)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
let numero2 = 16
let numero3 = 6

function comparacion() {
    if (numero2 > numero3) {
        console.log(`${numero2} es mayor`);
    } else if (numero3 > numero2) {
        console.log(`${numero3} es mayor`);  
    } else {
        console.log(`Son iguales`);
    }
}
comparacion()

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
let numero4 = 5
function multiplo(){
    if (numero4 % 5 === 0) {
    console.log(`${numero4} es múltiplo de 5`);
  }else{
    console.log(`${numero4} no es múltiplo de 5`);
  }
}
 multiplo()

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumeros(numero){
    for(let i = 0; i <= numero; i++){
      console.log(i);
    }
  }
  imprimirNumeros (5)

  // 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
  let palabra = "Flor"
  let repeticion = 5
  
  function repeticionDePalabra(palabra, cantidad) {
      for (let i = 0; i < cantidad; i++) {
          console.log(`${palabra}`);
      }
  }
  repeticionDePalabra(palabra, repeticion)

  // 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
  let array1 = [
    'Choi Seungcheol',
    'Yoon Jeonghan',
    'Hong Jisoo',
    'Wen Junhui',
    'Kwon Soonyoung',
    'Jeon Wonwoo',
    'Lee Jihoon',
    'Lee Seokmin',
    'Kim Mingyu',
    'Xu Minghao',
    'Boo Seungkwan',
    'Chwe Hansol Vernon',
    'Lee Chan',
]
console.log(array1);

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
let array2 = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
]
function descartar(array2) {
    for (let i = 0; i < array2.length; i++) {
        if (i !== 5) {
            console.log(array2[i]);
        }
    }
}
descartar(array2);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
let array3 = [
    '2',
    '4',
    '6',
    '8',
    '10',
]
let num = 2
function multiplicar(array3, num) {
    for (let i = 0; i < array3.length; i++) {
        console.log(array3[i] * num);
    }
}
multiplicar(array3, num)