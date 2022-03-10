// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// // Bonus: use somente um if .

let num1 = 69;
let num2 = 48;
let num3 = 25;

if ( num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ) {
  console.log('true');
} else {
  console.log('false');
}

//Outra resolução
const isTrue = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0;
console.log(isTrue);