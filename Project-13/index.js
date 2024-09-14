const formEle=document.getElementById("booking-form");

let payload={};


formEle.addEventListener("submit",(event)=>{
    const name1=formEle.elements["name-input"].value;
    const email=formEle.elements["email-input"].value;
    const gender=formEle.elements["radio-input"].value;
    const doctor=formEle.elements["doctor"].value;
    const date=formEle.elements["date"].value;
    event.preventDefault();
    payload={
        name1,
        email,
        gender,
        doctor,
        date
    }
    if(validate(payload)){
        fetch("locationedpayload.com", {
            method:"POST",
            body:JSON.stringify(payload)
        });
    }else
        alert("Please enter valid cread");

})

function validate(payload){
    let isValid=true;
    const {name,email}=payload;

    isValid=validateName(name);
    if(!isValid)
        return false

    isValid=validateEmail(email);

    if(!isValid)
        return false
    return isValid;
}

function validateName(name){
    let isValid=true;

    const nameRegEx=/^[a-z A-Z]+$/;
    const nameVal=name.trim();
    if(!nameVal){
        isValid=false;
        nameValidation.innerText="Please enter name";
    }
    else
    if(!nameVal.match(nameRegEx)){
        isValid=false;
        nameValidation.innerText="do not enter special char";
    }else if(nameVal.length<3){
        isValid=false;
        nameValidation.innerText="Need atlest 3 character";
        }

    return isValid;
}

function validateEmail(email){
    const emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailVal=email.trim();
    if(!emailVal){
        emailValidation.innerText="please enter email";
    }else if(!emailVal.match(emailRegEx)){
        emailValidation.innerText="Please enter correct email";
    }
}

const nameEle=formEle.elements["name-input"];
const emailEle=formEle.elements["email-input"];

const nameValidation=document.getElementById("name-validation");
const emailValidation=document.getElementById("email-validation");

nameEle.addEventListener("focus",()=>{
    console.log("focus"); 
    nameValidation.innerText="";

})

nameEle.addEventListener("blur",(event)=>{
    validateName(event.target.value);
})

emailEle.addEventListener("focus",()=>{
    emailValidation.innerHTML="";
})

emailEle.addEventListener("blur",(event)=>{
    validateEmail(event.target.value.trim());
    // emailValidation.innerHTML="enter correct mail";
})