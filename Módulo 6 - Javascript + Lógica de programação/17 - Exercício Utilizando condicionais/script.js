let pilot = window.prompt("Qual o seu nome, piloto?")
let velocity = 0
let velocityTemp = prompt("Qual velocidade gostaria de acelerar a nave? (*km/s)")

if (confirm(`Estamos indo para ${velocityTemp} km/s`)) {
    velocity = velocityTemp
    alert("Velocidade alterada.")
} else {
    alert("Velocidade não alterada.")
}

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocity < 40) {
    alert("Voce está devagar, podemos aumentar mais!")
} else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity >= 40 && velocity < 80) {
    alert("Velocidade alta. Considere diminuir.")
} else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert(`Nome do piloto: ${pilot}\nVelocidade: ${velocity} km/s`)