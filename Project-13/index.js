const formEle=document.getElementById("booking-form");

const nameEle=formEle.elements["name-input"];
const emailEle=formEle.elements["email-input"];

nameEle.addEventListener("focus",()=>{
    console.log("focus"); 
})

nameEle.addEventListener("blur",()=>{
    console.log("blur");
})

console.log("Hello");