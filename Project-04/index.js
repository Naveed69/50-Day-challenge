const button=document.getElementById("btn");
const dice=document.getElementById("dice");
const roll_History=document.getElementById("roll-history");
let history=[];
function rollDice(){
    const ranNo=Math.floor(Math.random()*6)+1;
    const diceFace=getdiceFace(ranNo);
    dice.innerHTML=diceFace;
    history.push(diceFace);
    updateRollHistory();
}

function updateRollHistory(){
    roll_History.innerHTML=" ";
    for(let i=0;i<history.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=` Roll ${i+1}: <span>${getdiceFace(history[i])}</span>`;
        roll_History.appendChild(listItem);
    }
    
}


function getdiceFace(ranNo){
    switch(ranNo){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857" ;
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";  
        default:
            " ";      
    }
}

button.addEventListener("click", ()=>{
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    }, 1000);
    console.log("clicked");
}
);