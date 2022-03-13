// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];  
}
let media = soma / numbers.length

console.log('Média dos valores: ' + media);

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
