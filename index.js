
var randomNumber1, randomNumber2;
var rollDice = document.querySelector("#buttonID");

function diceOne(){
randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".One img").setAttribute("src","images/dice"+randomNumber1+".png");
console.log(randomNumber1);
}

function diceTwo(){
randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".Two img").setAttribute("src","images/dice"+randomNumber2+".png");
console.log(randomNumber2);
}

rollDice.addEventListener("click", function() {
  diceOne();
  diceTwo();

  if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
  } else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerText = "It's a Tie!";
  }

});
