let breakfastDiv = document.getElementById("breakfast")


let LunchDiv = document.getElementById("lunch")


function breakfastClicked(){
    let breakfastDiv = document.getElementById("breakfastFoods")
    breakfastDiv.style.display = 'flex'
    let lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'none'
}

function lunchClicked(){
    let breakfastDiv = document.getElementById("breakfastFoods")
    breakfastDiv.style.display = 'none'
    let lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'flex'
}

breakfastDiv.addEventListener('click', () => breakfastClicked())
LunchDiv.addEventListener('click', () => lunchClicked())