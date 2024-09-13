const formEle=document.getElementById("booking-form");

const nameEle=formEle.elements["name-input"];
const emailEle=formEle.elements["email-input"];

const nameValidation=document.getElementById("name-validation");
const emailValidation=document.getElementById("email-validation");

nameEle.addEventListener("focus",()=>{
    console.log("focus"); 
    nameValidation.innerText="";

})

nameEle.addEventListener("blur",()=>{
    console.log("blur");
    nameValidation.innerText=nameEle.value;
})

emailEle.addEventListener("focus",()=>{
    console.log("focus");
    emailValidation.innerHTML="";
})

emailEle.addEventListener("blur",()=>{
    console.log("blur");
    emailValidation.innerHTML="enter correct mail";
})