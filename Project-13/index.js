const nameEle=document.querySelector("#name-input");
const emailEle=document.querySelector("#email-input");

nameEle.addEventListener("blur",()=>{
    console.log(nameEle.value);
})