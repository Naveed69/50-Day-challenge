const nameEle=document.querySelector("#name-input");
const emailEle=document.querySelector("#email-input");


nameEle.addEventListener("onChange",()=>{
    console.log(nameEle.value);
})

console.log(nameEle);
console.log(emailEle);