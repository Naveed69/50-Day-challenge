const buttons=document.querySelectorAll("button");
const res=document.getElementById("result");
const ps=document.getElementById("humanP");
const cs=document.getElementById("computerP");

let playerScore=0;
let computerScore=0;

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>
    {
        const result=playRound(button.id,computerPlay());
        res.innerHTML=result;
    });
});

function computerPlay(){
    const choices=["rock","papper","scissor"];
    const rchoice=Math.floor(Math.random()*choices.length);
    return choices[rchoice];
}

function playRound(pSuggestion,cSuggestion){
    if(pSuggestion===cSuggestion)
        return "It's a tie!!";
    else if(
        pSuggestion === "rock" && cSuggestion === "scissor" ||
        pSuggestion === "scissor" && cSuggestion === "papper" ||
        pSuggestion === "papper" && cSuggestion === "rock"
        ){
            playerScore++;
            ps.textContent=playerScore;
            return "You Win!";
        }else {
            computerScore++;
            cs.textContent=computerScore;
            return "You lose!";
        }
}