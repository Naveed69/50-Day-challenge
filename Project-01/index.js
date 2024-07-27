const btnE1 =document.getElementById("btn");
const birthdayE1 =document.getElementById("Birthday");
const resultE1=document.getElementById("result");
function calculateAge(){
    const bday_value=birthdayE1.value;
    if(bday_value === "")
            alert("Please enter your Birthday");
        else{
        const age=getAge(bday_value);
        resultE1.innerText =`Your age is ${age} ${age>1?"years":"year"} old`;
       
    }
}

function getAge(bday){
    const currentDate= new Date();
    const birthYear =new Date(bday);    
    let a= currentDate.getFullYear()-birthYear.getFullYear();

    if(currentDate.getMonth()-bday.getmonth<0 || (currentDate.getMonth()-bday.getmonth ==0 && currentDate.getDay()>bday.getDay))
        a--;

    return a;
}

btnE1.addEventListener("click", calculateAge)