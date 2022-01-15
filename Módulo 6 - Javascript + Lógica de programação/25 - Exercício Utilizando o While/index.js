let spaceshipName = prompt("Digite o nome da nave:")
let count = 0
let chosenOption

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while (chosenOption == 1) {
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
    count += 1
}

alert("Nave: " + spaceshipName + "\nDobras realizadas: " + count)