let list = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let score = 0;
let lastFlipped;
let flippedCards = [];
let congrats = document.getElementById("win");
let rules = document.getElementById("rules");

function shuffle (){
    for(let x = 0; x < 500; x++){
        let numberOne = Math.floor(Math.random()*16);
        let numberTwo = Math.floor(Math.random()*16);
        let temp = list[numberTwo];
        list[numberTwo] = list[numberOne];
        list[numberOne] = temp;
    }
}

function display(position){
    let card = document.getElementById(position);
    if (list[position] == 1){
        card.setAttribute("src","Pikachu.webp");
    }
    if (list[position] == 2){
        card.setAttribute("src","snorlax.webp");
    }
    if (list[position] == 3){
        card.setAttribute("src","jiggypuff.webp");
    }
    if (list[position] == 4){
        card.setAttribute("src","magikarp.webp");
    }
    if (list[position] == 5){
        card.setAttribute("src","rick.jpg");
    }
    if (list[position] == 6){
        card.setAttribute("src","umbreon.webp");
    }
    if (list[position] == 7){
        card.setAttribute("src","bill.jpg");
    }
    if (list[position] == 8){
        card.setAttribute("src","eveee.jpg");
    }
}
function engine(position){
    display(position);
    let card = document.getElementById(position);
    if(flippedCards.includes(card)){
        return '';
    }
    if (lastFlipped != null){
        if (check(card,lastFlipped)){
           flippedCards.push(card);
           flippedCards.push(lastFlipped);
        }
        else{
            let last = lastFlipped;
            setTimeout(() => {
            card.setAttribute("src","pokemoncard.png");
            last.setAttribute("src","pokemoncard.png");
        }, 250);
        }
        lastFlipped = null;
        score++;
        let scoreDisplay = document.getElementById("score");
        scoreDisplay.innerHTML = "Score: "+score;
    }
    else {
        lastFlipped = card;
    }
    win();
}

function reset(){
    rules.style.visibility = "hidden";
    congrats.style.visibility = "hidden";
    lastFlipped = null;
    for (let x = 0; x<16; x++){
        let card = document.getElementById(x);
        card.setAttribute("src","pokemoncard.png");
    }
    shuffle();
    score = 0;
    let scoreDisplay = document.getElementById("score");
        scoreDisplay.innerHTML = "Score: "+score;
}

function rule(){
    alert("Welcome to Guess The Pokemon! In this game, you'll have to match pairs of pokemon cards with the same image. In this game, you'll have to match pairs of pokemon cards with the same image. Matching all 16 cards will win you the game. If you manage to match a pair, those cards will stay flipped.If you don't manage to match a pair, both cards you select will be flipped back");
}

function check(cardOne, cardTwo){
    if (cardOne.getAttribute("src") == cardTwo.getAttribute("src")){
        return true;
    }
    return false;
}

function win(){
    if (flippedCards.length==16){
        setTimeout(() => {
            alert("Congrations you win! Scroll down to start again.")
        }, 250);
    }
}




