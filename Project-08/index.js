const accessKey="lM0w4ch5BqrZ2gb0wzp2hUy3b-e-7ex1Cd1a8JuPWOo";
const formEl=document.querySelector('form');
const inputEl=document.getElementById('ilab');
const searchResultsEl=document.querySelector(".search-results");
const newImage=document.getElementById('show-more-images');

let inputData="";
let page=1;

async function searchImages(){
    inputData=inputEl.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey};`
    console.log(url);
    const response=await fetch(url);
    const data=await response.json();
    if(page===1)
    {
        searchResultsEl.innerHTML="";
    }
    const results=data.results;

    const imageWrapper=document.createElement("div");
    imageWrapper.classList.add("show-more-images");

    if(page>1){
        newImage.style.display=block;
    }
   

}

formEl.addEventListener("submit", (eve)=>{
    eve.preventDefault();
    page=1;
    console.log("Clicked submit");
    searchImages();
})