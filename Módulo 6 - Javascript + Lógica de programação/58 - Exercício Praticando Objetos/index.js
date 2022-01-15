/*
let spaceship = {
    name: prompt("Insira o nome da nave:"),
    type: prompt("Insira o tipo da nave:"),
    velocity: 0,
    maxVelocity: parseInt(prompt("Insira a velocidade máxima da nave (km/s):"))
}

spaceship.speedUp = function(acceleration) {
    this.velocity += acceleration
    if (this.velocity > this.maxVelocity) {
        alert(`Velocidade acima da velocidade máxima permitida!\nVelocidade atual: ${this.velocity} km/s\nVelocidade máxima: ${this.maxVelocity} km/s`)
    }
    console.log(spaceship)
}

let chosenOption

do {
    chosenOption = prompt("Selecione a opção desejada:\n1- Acelerar\n2- Parar")
    switch (chosenOption) {
        case "1":
            speedUpSpaceship()
            break
        case "2":
            stopSpaceship()
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (chosenOption != 2)

function speedUpSpaceship() {
    let acceleration = parseInt(prompt("Informa quanto você quer acelerar (km/s):"))
    spaceship.speedUp(acceleration)
}

function stopSpaceship() {
    alert("Parando a nave...")
    alert("Nave parada com sucesso!")
    spaceship.velocity = 0
}
*/

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave:")
    spaceship.type = prompt("Informe o tipo da nave:")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s):"))
}

function accelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPADASSADA!\nVelocidade da nave: " + spaceship.velocity + " km/s.\n" + "Velocidade máxima da nave: " + spaceship.maxVelocity + " km/s")
    }
}

function stop() {
    alert("nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nMáxima da nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch (chosenOption) {
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida!")
        }
    } while (chosenOption != "2")
}

registerSpaceship()
showMenu()