let input = document.querySelector('input');

let grams = document.getElementById('grams');
let kilograms = document.getElementById('kilograms');
let ounces = document.getElementById('ounces');


function toGrams(){
    let k = input.value * .45
    let g = input.value * 453.59
    let o = input.value * 16
    grams.innerHTML=g   
    kilograms.innerHTML=k
    ounces.innerHTML=o 
}


let event = input.addEventListener('input', toGrams);

