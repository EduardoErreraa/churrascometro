// carne - 400gr por pessoa + de 6h - 650gr
// cerveja - 1200ml por pessoa + de 6h - 2000ml
// bebidas - 1000ml por pessoa + de 6h - 1500ml
// crianças valemp por 0,5

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calc(){

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let qtdTotalMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * kids);
    let qtdTotalBeer = beerPP(duration) * adults;
    let qtdTotalDrink = drinkPP(duration) * adults + (drinkPP(duration) / 2 * kids);

    result.innerHTML = `<h1 class="tittle">Para esse Churrasco você precisará de:</h1>`


    result.innerHTML += `<div class="icon meat">
    <img class="img-meat" src="./01-Images/meat.png">
    <p>${qtdTotalMeat/1000} Kg de Carne</p>
    </div>`;

    result.innerHTML += `<div class="icon beer">
    <img class="img-beer" src="./01-Images/beer.png">
    <p>${Math.ceil(qtdTotalBeer/350)} Latinhas de Cerveja</p>
    </div>`;

    result.innerHTML += `<div class="icon drink">
    <img class="img-drink" src="./01-Images/drink.png">
    <p>${Math.ceil(qtdTotalDrink/1000)} L de Refrigerante</p>
    </div>`;
}   

function meatPP(duration){
    if(duration >= 6){
        return 650}
    else{
        return 400
    }
}

function beerPP(duration){
    if(duration >= 6){
        return 2000}
    else{
        return 1200
    }
}

function drinkPP(duration){
    if(duration >= 6){
        return 1500}
    else{
        return 1000
    }
}