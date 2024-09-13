const formEle=document.getElementById("booking-form");

const nameEle=formEle.elements["name-input"];
const emailEle=formEle.elements["email-input"];

const nameValidation=document.getElementById("name-validation");

nameEle.addEventListener("focus",()=>{
    console.log("focus"); 
    nameValidation.innerText="";

})

nameEle.addEventListener("blur",()=>{
    console.log("blur");
    nameValidation.innerText="Blured";
})

console.log("Hello");