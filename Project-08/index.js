const accessKey="lM0w4ch5BqrZ2gb0wzp2hUy3b-e-7ex1Cd1a8JuPWOo";
const formEl=document.querySelector('form');
const inputEl=document.getElementById('ilab');
const searchResultsEl=document.querySelector(".search-results");
const newImage=document.getElementById('show-more-images');


formEl.addEventListener("submit", (eve)=>{
    eve.preventDefault();
    console.log("Clicked submit");
})