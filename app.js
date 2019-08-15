// let cornWater = 10 - 10
// let celereezWater = 10 - 10 
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


function draw() {
    let moneyFieldElement = document.querySelector("#money-field")
    let cornWaterElement = document.querySelector("#corn-water")
    let celereezWaterElement = document.querySelector("#celereez-water")
    moneyFieldElement.textContent = `Money: $${money}`
}
