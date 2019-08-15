let farm = {
    money: 0,
    corn: {
        name: "Justa Corn",
        worth: 100,
        waterCount: 0,
    },
    celereez: {
        name: "Celereez",
        worth: 5,
        waterCount: 0,
    },
    animals: [
        {
            name: "Bar",
            type: "Cow",
            size: 1
        },
        {
            name: "Bee",
            type: "Cow",
            size: 1
        },
        {
            name: "Que",
            type: "Cow",
            size: 1
        },
        {
            name: "Queso",
            type: "Cow",
            size: 1
        }
    ]

}

function drawAnimals() {
    //we need three things for this function to work:
    //element to inject into
    //template to inject
    //data to create the template
    let animalsElement = document.querySelector("#animals")
    let template = ""
    for (let i = 0; i < farm.animals.length; i++) {
        let animal = farm.animals[i]
        template += `<div class="col-6">
                        <h1>Name: ${animal.name}</h1>
                        <p>Itsa: ${animal.type}</p>
                        <p>Size: ${animal.size}</p>
                        <p>Watered: 0</p>
                        <div class="row">
                            <button class="btn btn-success" onclick="putOutToPasture(${i})">Retire</button>
                            <button class="btn btn-info" onclick="feed(${i})">Feed</button>
                        </div>
                    </div>`
    }
    animalsElement.innerHTML = template

}


function feed(index) {
    farm.animals[index].size++
    draw()
}

function putOutToPasture(index) {
    farm.money += farm.animals[index].size * 2000
    farm.animals.splice(index, 1)
    draw()
}

function water(cropName) {
    let crop = farm[cropName]
    crop.waterCount++
    draw()
}

function harvest(cropName) {
    let crop = farm[cropName]
    farm.money += crop.worth * crop.waterCount
    crop.waterCount = 0

    // if (crop === "corn") {
    //     money += justCorn.worth * justCorn.waterCount
    //     justCorn.waterCount = 0
    // } else {
    //     money += celereez.worth * celereez.waterCount
    //     celereez.waterCount = 0
    // }
    draw()
}

function draw() {
    drawAnimals()
    let moneyFieldElement = document.querySelector("#money-field")
    let cornWaterElement = document.querySelector("#corn-water")
    let celereezWaterElement = document.querySelector("#celereez-water")
    moneyFieldElement.textContent = `Money: $${farm.money}`
    cornWaterElement.textContent = `Watered: ${farm.corn.waterCount}`
    celereezWaterElement.textContent = `Watered: ${farm.celereez.waterCount}`
}




draw()