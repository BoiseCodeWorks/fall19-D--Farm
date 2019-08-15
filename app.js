let farm = {
    money: 0,
    corn: {
        name: "Just Corn",
        worth: 100,
        waterCount: 0,
    },
    celereez: {
        name: "Celereez",
        worth: 5,
        waterCount: 0,
    },
}

function water(crop) {
    farm[crop].waterCount++
    draw()
}

function harvest(crop) {
    if (crop === "corn") {
        money += justCorn.worth * justCorn.waterCount
        justCorn.waterCount = 0
    } else {
        money += celereez.worth * celereez.waterCount
        celereez.waterCount = 0
    }
    draw()
}

function draw() {
    let moneyFieldElement = document.querySelector("#money-field")
    let cornWaterElement = document.querySelector("#corn-water")
    let celereezWaterElement = document.querySelector("#celereez-water")
    moneyFieldElement.textContent = `Money: $${money}`
    cornWaterElement.textContent = `Watered: ${justCorn.waterCount}`
    celereezWaterElement.textContent = `Watered: ${celereez.waterCount}`
}

