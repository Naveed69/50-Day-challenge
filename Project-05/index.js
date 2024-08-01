const startBtn=document.getElementById("start");
const stopBtn=document.getElementById("stop");
const resetBtn=document.getElementById("reset");
let timerLable=document.getElementById("timer");
let interval;
let timeleft=1500; 

function updateTime(){
    let min=Math.floor(timeleft/60);
    let seconds=timeleft%60;
    let formattedTime = `${min.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerLable.innerHTML = formattedTime;
}

function startFn(){
    interval= setInterval(()=>{
        timeleft--;
        updateTime();
        if(timeleft==0){
            clearInterval(interval);
                alert("Time's Up...!!!");
                timeleft=1500;
        }
    },1000
    )
    // timerLable.innerHTML=Date();
}

function stopFn(){
    clearInterval(interval);
}

function resetFn(){
    clearInterval(interval);
    timeleft=1500;
    updateTime();
}

startBtn.addEventListener("click", startFn);
stopBtn.addEventListener("click", stopFn);
resetBtn.addEventListener("click", resetFn);