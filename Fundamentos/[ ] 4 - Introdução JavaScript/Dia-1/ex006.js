// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "bispo";

if (pecaXadrez.toLowerCase() === 'rei') {
  console.log(
    "Rei -> Qualquer lado, apenas uma casa\n"+
    "+ ----------------- +\n"+
    "| 8 - - - - - - - - |\n"+
    "| 7 - - - - - - - - |\n"+
    "| 6 - - x x x - - - |\n"+
    "| 5 - - x ♔ x - - - |\n"+
    "| 4 - - x x x - - - |\n"+
    "| 3 - - - - - - - - |\n"+
    "| 2 - - - - - - - - |\n"+
    "| 1 - - - - - - - - |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else if (pecaXadrez.toLowerCase() === 'rainha') {
  console.log(
    "Rainha -> Qualquer lado, quantas casas quiser\n"+
    "+ ----------------- +\n"+
    "| 8 x - - x - - x - |\n"+
    "| 7 - x - x - x - - |\n"+
    "| 6 - - x x x - - - |\n"+
    "| 5 x x x ♕ x x x x |\n"+
    "| 4 - - x x x - - - |\n"+
    "| 3 - x - x - x - - |\n"+
    "| 2 x - - x - - x - |\n"+
    "| 1 - - - x - - - x |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else if (pecaXadrez.toLowerCase() === 'torre') {
  console.log(
    "Torre -> Linhas, quantas casas quiser\n"+
    "+ ----------------- +\n"+
    "| 8 - - x - - - - - |\n"+
    "| 7 - - x - - - - - |\n"+
    "| 6 - - x - - - - - |\n"+
    "| 5 - - x - - - - - |\n"+
    "| 4 x x ♖ x x x x x |\n"+
    "| 3 - - x - - - - - |\n"+
    "| 2 - - x - - - - - |\n"+
    "| 1 - - x - - - - - |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else if (pecaXadrez.toLowerCase() === 'bispo') {
  console.log(
    "Bispo -> Diagonais, quantas casas quiser\n"+
    "+ ----------------- +\n"+
    "| 8 x - - - - - x - |\n"+
    "| 7 - x - - - x - - |\n"+
    "| 6 - - x - x - - - |\n"+
    "| 5 - - - ♗ - - - - |\n"+
    "| 4 - - x - x - - - |\n"+
    "| 3 - x - - - x - - |\n"+
    "| 2 x - - - - - x - |\n"+
    "| 1 - - - - - - - x |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else if (pecaXadrez.toLowerCase() === 'cavalo') {
  console.log(
    "Cavalo -> movimento em L, pode pular peças\n"+
    "+ ----------------- +\n"+
    "| 8 - - - - - - - - |\n"+
    "| 7 - - x - x - - - |\n"+
    "| 6 - x - - - x - - |\n"+
    "| 5 - - - ♘ - - - - |\n"+
    "| 4 - x - - - x - - |\n"+
    "| 3 - - x - x - - - |\n"+
    "| 2 - - - - - - - - |\n"+
    "| 1 - - - - - - - - |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else if (pecaXadrez.toLowerCase() === 'peão') {
  console.log(
    "Peão -> Frente, duas casas na primeria jogada e uma nas seguintes\n"+
    "+ ----------------- +\n"+
    "| 8 - - - - - - - - |\n"+
    "| 7 - - - - - - - - |\n"+
    "| 6 - - - x - - - - |\n"+
    "| 5 - - - x - - - - |\n"+
    "| 4 - - - ♙ - - - - |\n"+
    "| 3 - - - - - - - - |\n"+
    "| 2 - - - - - - - - |\n"+
    "| 1 - - - - - - - - |\n"+
    "|   a b c d e f g h |\n"+
    "+ ----------------- +\n"
  );
} else {
    console.log('Você não declarou uma peça de xadrez');
}
