// let cornWater = 10 - 10
// let celereezWater = 10 - 10 

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
}

function draw() {
    let moneyElement = document.querySelector("#money-field")
}