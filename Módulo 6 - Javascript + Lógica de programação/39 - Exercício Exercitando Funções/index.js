let spaceshipName = prompt("Digite o nome da nave: ")
let spaceshipVelocity = 0
let chosenOption

do {
    showMenu()

    switch (chosenOption) {
        case "1":
            accelerateSapeceship(spaceshipVelocity, 5)
            break
        case "2":
            decelerateSapeceship(spaceshipVelocity, 5)
            break
        case "3":
            showInfo()
            break
        case "4":
            alert(`Encerrando programa.`)
            break
        default:
            alert(`Opção inválida!`)
            break
    }
} while (chosenOption != 4)

function showMenu() {
    chosenOption = prompt(`Escolha uma das quatro opções:\n1- Acelerar a nave em 5 km/s\n2- Desacelerar em 5 km/s \n3- Imprimir dados de bordo \n4- Sair do programa`)
}

function showInfo() {
    alert(`Nave: ${spaceshipName} \nVelocidade: ${spaceshipVelocity} km/s`)
}

function accelerateSapeceship(velocity, acceleration) {
    spaceshipVelocity = velocity + acceleration
    alert(`Velocidade aumentada em ${acceleration} km/s.`)
}

function decelerateSapeceship(velocity, deceleration) {
    let newVelocity = velocity - deceleration

    if (newVelocity >= 0) {
        spaceshipVelocity = newVelocity
        alert(`Velocidade diminuida em ${deceleration} km/s.`)
    } else {
        alert(`Velocidade da nave não pode ser negativa!`)
    }
}