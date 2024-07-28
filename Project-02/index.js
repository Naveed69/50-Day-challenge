const btnE1 = document.getElementById("btn");
const bill = document.getElementById("bill");
const tip = document.getElementById("tipPercentage");
const resultE1=document.getElementById("result");
function tipCalculate(){
    let res=bill.value*(1+tip.value/100);

    resultE1.innerText=`${res.toFixed(2)}$`;
}

btnE1.addEventListener("click", tipCalculate);

