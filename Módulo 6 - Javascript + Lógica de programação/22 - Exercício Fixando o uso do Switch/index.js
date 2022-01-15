let distance = prompt("Qual a distância em anos luz?")
let chosenOption = prompt("1- Parsec (pc)\n2- Unidade astronomica (AU)\n3- Quilômetros (km)")

switch (chosenOption) {
    case "1":
        let parsecDistance = distance * 0.306601
        alert("Distância em Anos-luz: " + distance + "\nParsec (pc): " + parsecDistance)
        break
    case "2":
        let astronomicalUnitDistance = distance * 63241.1
        alert("Distância em Anos-luz: " + distance + "\nUnidade astronomica (AU): " + astronomicalUnitDistance)
        break
    case "3":
        let quilometersDistance = distance * 9.5 * Math.pow(10, 12)
        alert("Distância em Anos-luz: " + distance + "\nQuilômetros (km): " + quilometersDistance)
        break
    default:
        alert("Distância em Anos-luz: " + distance + "\nUnidade não identificada: Conversão fora do escopo")
}