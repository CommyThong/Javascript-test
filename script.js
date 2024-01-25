let play = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let draws = 0;

let introduction = ("Get ready – five rounds of rock, paper, and scissors are about to start! (User's consent not required.)");
alert(introduction)
let i = 0;
while (i < 5){

    let hAnswer = prompt("How will it be, eh? You ought to choose!");
    hAnswer = hAnswer.toLowerCase();

    if (
        (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissors")
    ) {
        alert("Dude play either rock, paper, or scissors. Reload the page to start again.");
        break; 
    };

    let cAnswer = play[Math.floor(Math.random() * play.length)];
if (hAnswer == "rock" || hAnswer == "paper" || hAnswer == "scissors") {
    alert("Computer has played " + cAnswer + ".");
 }

 //Response for draw & counter
if (hAnswer === cAnswer) {
    draws++
    alert(`It's a draw. We're keeping tabs... (${draws})`)
}

//Response for win & counter
else if (
    (hAnswer == "rock" && cAnswer == "scissors") ||
    (hAnswer == "paper" && cAnswer == "rock") ||
    (hAnswer == "scissors" && cAnswer == "paper")
) { wins++
    alert(`You have won ${wins} times, luck lol.`)
}

//Response for loss & counter
else {
    losses++
    alert(`You have lost ${losses} times ahaha!`)
} i++ //counter for <5 loop
}

alert(`You have won ${wins} times, draw ${draws} times and lost ${losses} times.`)
// document.querySelector("button.button1").innerHTML = (i);