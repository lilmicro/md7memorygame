import $ from 'jquery';
import sum from './utils/sum/sum';


const cards = document.querySelectorAll<HTMLElement>('.cards .card')
const card = document.querySelector<HTMLElement>('.card')




let counter = 0;
let firstSelect = "";
let secondSelect = "";

    cards.forEach((card) =>{ //var click uz visam kartim
        card.addEventListener("click", () => {
        card.classList.add("clicked");

        if(counter ===0){
            firstSelect = card.getAttribute("cardcol");
            counter ++ ;
        } else {
            secondSelect = card.getAttribute("card");
            counter = 0;
        } 
        



type CardType = {
    id: number;
    value: string;
    isFaceUp: boolean;
    color: string;}

    
const initalizeGame = (cards: CardType[]) =>{

    function shuffle (cards: CardType[]) {
        var i = 0,
            j = 0,
           temp = null;
      
        for (i = cards.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = cards[i]
          cards[i] = cards[j]
          cards[j] = temp;
        }
        return ;
      }
    shuffle(cards); //shuffle cards

    const button = document.querySelector<HTMLButtonElement>('.button');
function resetGame (){
    initalizeGame(cards);
}
button.addEventListener('click', resetGame);



    cards.forEach((card) => { //cards facing down
        card.isFaceUp = false;
    }) ;        
            if(firstSelect === secondSelect){
           console.log(true)
            }
        }

    
    }); 
    });
   



/*const colors= ["red", "green", "blue"];
const colorList= [...colors, ...colors]; //double colors
const cardCount = colorList.length; // cik kartis


let correctCardCount = 0; //sakas ar 0
let activeCard = null; //clicked card kurai tiek meklēts paris
let endOfMove = false;
let storage: number[] =[];
let moves : number;

//RANDOM COLOR PICKER
for (let i = 0; i < cardCount; i++){
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const color = colorList[randomIndex];

    colorList.splice(randomIndex, 1);

    console.log(color)
}




const cards : CardType []= [
    { id: 1, value: 'card1', isFaceUp: false, color : 'red'},
    { id: 2, value: 'card2', isFaceUp: false, color : 'red'},
    { id: 3, value: 'card3', isFaceUp: false, color : 'green'},
    { id: 4, value: 'card4', isFaceUp: false, color : 'blue'},
    { id: 5, value: 'card5', isFaceUp: false, color : 'green'},
    { id: 6, value: 'card6', isFaceUp: false, color : 'blue'},
];







const initalizeGame = (cards: CardType[]) =>{

function shuffle (cards: CardType[]) {
    var i = 0,
        j = 0,
       temp = null;
  
    for (i = colorList.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = colorList[i]
      colorList[i] = colorList[j]
      colorList[j] = temp;
    }
    return colorList;
  }
shuffle(cards); //shuffle cards

cards.forEach((card) => { //cards facing down
    card.isFaceUp = false;
}) ;




function showCard(cards) {
    card.classList.add('show');
}
moves = 0; //ja vajag
storage = [];
}




const handleCardClick = (clickCardIndex: number, cards: CardType[]) =>{
    const clickedCard = cards[clickCardIndex];  //index of clicked card
    
    
     if (!clickedCard.isFaceUp || storage.length >=2){
        return;
    }
    clickedCard.isFaceUp = !clickedCard.isFaceUp; //maina faceup
    clickedCard.color = clickedCard.color === 'red'? 'blue' : 'red'; //if-else
    storage.push(clickCardIndex); // pievieno storage noklikskinato



    if(storage.length ===2) {
            const [card1Index, card2Index] = storage;
            const card1 = cards[card1Index];
            const card2 = cards[card2Index];
            displayWinner (cards, card1, card2);
 }

}


function displayWinner(cards: CardType[], card1: CardType, card2: CardType) {
    const allPairsMatched = cards.every((card) => card.isFaceUp || card.value !== card1.value || card.value !== card2.value);

    if( allPairsMatched ){
        console.log('you won');
    } else {
        if (card1.color === card2.color) {
            console.log('Color Matched!'); 
            storage = [];
    }  else {
        setTimeout(() => {
            cards.forEach((card) =>{
                card.isFaceUp = false;
            });
        }, 1000);
    }storage = [];
    return displayWinner;
} }
    




   */ //BUTTON


    // SWITCH COLOR CLICK ON CARD
    


