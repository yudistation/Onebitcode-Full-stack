const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(elem => elem[1] > 9).map(elem => elem[0])

let pendingHitch = hitchedSpaceships.findIndex(elem => elem[2] == false) + 1

let nameSpaceships = hitchedSpaceships.map(elem => elem[0].toUpperCase())

alert(`As naves com mais de 9 membros são: ${crewGreaterThan9.join(", ")}\nPlataforma pendente para engate: ${pendingHitch}\nNaves disponíveis: ${nameSpaceships.join(", ")}`)