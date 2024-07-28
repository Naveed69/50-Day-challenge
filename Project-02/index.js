const btnE1 = document.getElementById("btn");
const bill = document.getElementById("bill");
const tip = document.getElementById("tipPercentage");
const resultE1=document.getElementById("result");
function tipCalculate(){
    if(bill.value<=0)
        alert("Please Enter valid Amount");
    else{
    let res=bill.value*(1+tip.value/100);

    resultE1.innerText=`${res.toFixed(2)}$`;
    }
}

btnE1.addEventListener("click", tipCalculate);

