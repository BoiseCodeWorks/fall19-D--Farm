let money = 0
let justCorn = {
    name: "Just Corn",
    worth: 100,
    waterCount: 0,
}

let celereez = {
    name: "Celereez",
    worth: 5,
    waterCount: 0,
}

function water(crop) {
    if (crop === "corn") {
        justCorn.waterCount++
    } else {
        celereez.waterCount++
    }
    draw()
}

function harvest(crop) {
    if (crop === "corn") {

    }
}

function draw() {
    let moneyFieldElement = document.querySelector("#money-field")
    let cornWaterElement = document.querySelector("#corn-water")
    let celereezWaterElement = document.querySelector("#celereez-water")
    moneyFieldElement.textContent = `Money: $${money}`
    cornWaterElement.textContent = `Watered: ${justCorn.waterCount}`
    celereezWaterElement.textContent = `Watered: ${celereez.waterCount}`
}

