// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let num1 = 64;
let num2 = 45;
let num3 = 22;

if ( num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0 ) {
  console.log('true');
} else {
  console.log(false);
}