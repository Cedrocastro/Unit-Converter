const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")

btnEl.addEventListener("click", function(){
    let input = inputEl.value
    p1.innerHTML = `<span>${input}</span> Meter - <span>${(input*meterToFeet).toFixed(3)}</span> Feet | <span>${input}</span> Feet - <span>${(input/meterToFeet).toFixed(3)}</span> Meter`
    p2.innerHTML = `<span>${input}</span> Liters - <span>${(input*literToGallon).toFixed(3)}</span> Gallons | <span>${input}</span> Gallons - <span>${(input/literToGallon).toFixed(3)}</span> Liters`
    p3.innerHTML = `<span>${input}</span> Kilo - <span>${(input*kiloToPound).toFixed(3)}</span> Pound | <span>${input}</span> Pound - <span>${(input/kiloToPound).toFixed(3)}</span> kilo`
})