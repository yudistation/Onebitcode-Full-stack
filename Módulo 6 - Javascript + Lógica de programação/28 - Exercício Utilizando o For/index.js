let spaceshipName = prompt("Digite o nome da nave: ")
let newSpaceshipName = ""
let charChange = prompt("Digite o caracter que deseja substituir: ")
let charWantToChange = prompt("Digite por qual caracter deseja substituir: ")

for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == charChange) {
        newSpaceshipName += charWantToChange
    } else {
        newSpaceshipName += spaceshipName[i]
    }
}

alert("O novo nome da nave é " + newSpaceshipName)