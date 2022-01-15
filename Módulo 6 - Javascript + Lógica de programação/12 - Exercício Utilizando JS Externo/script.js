let nomePessoaMaisVelha = prompt("Nome da pessoa mais velha:")
let idadePessoaMaisVelha = prompt("Idade da pessoa mais velha:")

let nomePessoaMaisNova = prompt("Nome da pessoa mais nova:")
let idadePessoaMaisNova = prompt("Idade da pessoa mais nova:")

let diferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova

alert("Nome da pessoa mais velha: " + nomePessoaMaisVelha +
    "\nIdade da pessoa mais velha: " + idadePessoaMaisVelha + " anos" +
    "\n\nNome da pessoa mais nova: " + nomePessoaMaisNova +
    "\nIdade da pessoa mais nova: " + idadePessoaMaisNova + " anos" +
    "\n\nDiferença de idade: " + diferencaIdade + " anos")