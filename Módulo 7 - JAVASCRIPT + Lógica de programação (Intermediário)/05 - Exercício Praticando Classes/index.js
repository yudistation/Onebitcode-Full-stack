class Spaceship {
    constructor(name, crewQuantity, isHitched = false, openEntryDoors = false) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = isHitched
        this.openEntryDoors = openEntryDoors
    }

    hitchSpaceship() {
        this.isHitched = true
        this.openEntryDoors = true
        alert(`Nave engatada. Abrindo portas de entrada...`)
    }
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt(`Selecione a opção desejada:\n1- Realizar engate\n2- Mostrar espaçonaves\n3- Sair do programa`)
        switch (chosenOption) {
            case "1":
                hitchNewSpaceship()
                break
            case "2":
                printSpaceships()
                break
            case "3":
                closeProgram()
                break
            default:
                invalidOption()
                break
        }
    } while (chosenOption != 3)
}

let listSpaceshipNames = []

function hitchNewSpaceship() {
    let newSpaceshipName = prompt(`Digite o nome da espaçonave:`)
    let newSpaceshipCrewQuantity = prompt(`Digite a quantidade de tripulante na espaçonave:`)
    let spaceship = new Spaceship(newSpaceshipName, newSpaceshipCrewQuantity)
    spaceship.hitchSpaceship()
    listSpaceshipNames.push(spaceship.name)
}

function printSpaceships() {
    let list = listSpaceshipNames.join("\n")
    alert(`As naves cadastradas são:\n${list}`)
}

function closeProgram() {
    alert(`Fechando programa.`)
}

function invalidOption() {
    alert(`Opção inválida!`)
}

showMenu()