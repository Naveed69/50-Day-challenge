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
    const response=await fetch(url);
    const data=await response.json();
    if(page===1)
    {
        searchResultsEl.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src = result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target ="_blank";
        imageLink.textContent=result.alt_description;
        imageWrapper.append(image);
        imageWrapper.append(imageLink);
        searchResultsEl.append(imageWrapper);
    })
    
    page++;


    if(page>1){
        newImage.style.display="block";
    }
   

}

formEl.addEventListener("submit", (eve)=>{
    eve.preventDefault();
    page=1;
    searchImages();
})

newImage.addEventListener("click", ()=>{
    searchImages();
})