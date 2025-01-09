// console.log("Hello")

// const myConstVar = 5;

// let foo = "testing variable string";
// var x =500;

// console.log(myConstVar)
// console.log(x)
// console.log(foo)

// let foodArray =["Pasta","pizza",'Salad']
// console.log(foodArray)

// let foodItem = foodArray[1]
// console.log("Food item = ",foodItem)

// let objectVariable = {
//     key:'value',
//     food: foodArray
// }

// console.log(objectVariable)

// let food = objectVariable['food']
// console.log(food)

// function AddTwoNumbers (num1,num2)
// {
//     let sum = num1+num2
// return sum
// }

// let sumVar =AddTwoNumbers(5,7)
// console.log(sumVar)

let breakfastElement = document.getElementById('breakfast')
console.log(breakfastElement)

let lunchElement = document.getElementById('lunch')
console.log(breakfastElement)

function BreakFastClickFunction()
{
    console.log('BreakFast Element was clicked')
   let breakfastDiv = document.getElementById('breakfastFoods')
   breakfastDiv.style.display='flex'

    let lunchDiv = document.getElementById('lunchFoods')
    lunchDiv.style.display='none'

}

function LunchClickFunction()
{
    console.log('Lunch Element was clicked')
   let breakfastDiv = document.getElementById('breakfastFoods')
   breakfastDiv.style.display='none'

    let lunchDiv = document.getElementById('lunchFoods')
    lunchDiv.style.display='flex'


}


breakfastElement.addEventListener("click",()=>BreakFastClickFunction())
lunchElement.addEventListener("click",()=>LunchClickFunction())