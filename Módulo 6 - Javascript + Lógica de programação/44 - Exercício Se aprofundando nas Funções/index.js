function decelerateSpaceshipVelocity(velocity, printer) {
    while (velocity > 0) {
        printer(velocity)
        velocity -= 20
    }
}

let spaceshipVelocity = 150
decelerateSpaceshipVelocity(spaceshipVelocity, velocity => console.log(`Velocidade atual da nave ${velocity}`))

alert(`A nave está parada. Podemos abrir as comportas.`)


/*
// Resolução feita pelo prof:
function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})

*/