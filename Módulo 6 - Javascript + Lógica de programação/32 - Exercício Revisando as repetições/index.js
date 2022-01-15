let spaceshipName = prompt("Digite o nome da espaçonave:")
let revertedSpaceshipName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break
    }
    revertedSpaceshipName += spaceshipName[i]
}

alert(revertedSpaceshipName)
alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + revertedSpaceshipName)