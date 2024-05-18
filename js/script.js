// --------   Variables =>

const $ = document 

let weightInputElem = $.querySelector("#weight")
let weightSpanElem = $.querySelector("#weight-val")

let heightInputElem = $.querySelector("#height")
let heightSpanElem = $.querySelector("#height-val")

let result = $.querySelector("#result")
let category = $.querySelector("#category")


// --------   Functions related to calculation =>

function bmiCalculation () {
    let weightValue = weightInputElem.value 
    let heightValue = heightInputElem.value
    let BMI = (weightValue / (Math.pow(heightValue/100 , 2))).toFixed(1)
    
    result.innerHTML = BMI

    weightSpanElem.innerHTML = weightValue + " kg"
    heightSpanElem.innerHTML = heightValue + " cm"

// --------   DOM of Project =>

    if (BMI < 18.5) {
        result.style.color = "#dada3a"
        category.innerHTML = "Under Weight"
    } else if (BMI >= 18.5 && BMI < 25) {
        result.style.color = "#0be881"
        category.innerHTML = "Normal Weight"
    } else if (BMI >= 25 && BMI < 29.9) {
        result.style.color = "#e89e0b"
        category.innerHTML = "Over Weight"
    } else if (BMI > 29.9) {
        result.style.color = "#cc2020"
        category.innerHTML = "Obese"
    }
}

// --------   Events =>

weightInputElem.addEventListener ("input" , bmiCalculation )
heightInputElem.addEventListener ("input" , bmiCalculation )

