const startb=document.getElementById('start');
const stopb=document.getElementById('stop');
const resetb=document.getElementById('reset');
const timeP=document.getElementById('timer');

let seconds=0;
let minutes=0;
let hours=0;
let interval;

function updateTime(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hours++;
        minutes=0;
    }
    if(hours==24)
    {
        seconds=0;
        minutes=0;
        hours=0;
        alert("24 hours has been completed stop watch reset to 00");
    }
    let formattedTime=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timeP.innerHTML=formattedTime;

}

function startTimer(){
    interval=setInterval(()=>{
        updateTime();
    },1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    console.log("clicked");
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    let formattedTime=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timeP.innerHTML=formattedTime;
}


startb.addEventListener('click',startTimer);
stopb.addEventListener('click',stopTimer);
resetb.addEventListener('click',resetTimer);