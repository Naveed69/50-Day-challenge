const API_Key="28ad0e907a6948e394df4d02e65b8db0";
const recipe_list=document.getElementById("recipe-list");

function displayReceipes(Recipes){
    recipe_list.innerHTML ="";
    Recipes.forEach((recipes) => {
        const recipes_item=document.createElement("li");
        recipes_item.classList.add("recipe-item");
        let recipes_image=document.createElement("img");

        recipes_image.src=recipes.image;
        recipes_image.src=recipes.image;

        let recipes_title=document.createElement("h2");
        recipes_title.innerText=recipes.title;

        let recipes_ingrediant=document.createElement("p");
        recipes_ingrediant.innerText=` <strong>Ingredients: </strong> ${recipes.extendedIngredients.map((ing)=>ing.original).join(", ")}`;

        let recipes_url=document.createElement("a");
        recipes_url.href=recipes.spoonacularSourceUrl;
        recipes_url.innerText="View recipe";


        recipe_list.appendChild(recipes_item);
        recipes_item.appendChild(recipes_image);
        recipes_item.appendChild(recipes_title);
        recipes_item.appendChild(recipes_ingrediant);
        recipes_item.appendChild(recipes_url);
        console.log(Recipes);
    });
}

async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_Key}`);
    const data=await response.json();
    return data.recipes;
}

async function init(){
    const Recipes= await getRecipes();
    displayReceipes(Recipes);
    
}

init();