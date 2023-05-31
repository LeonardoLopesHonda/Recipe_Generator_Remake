import { getRecipe } from "../Modules/API.js";

const RECIPE_NAME = document.querySelector('.recipe-name');
const RECIPE_SERVINGS = document.querySelector('.num-of-servings');
const RECIPE_IMG = document.querySelector('.recipe-img');
const BTN_REFRESH_RECIPE = document.querySelector('.refresh-recipe');
const BTN_VIEW_RECIPE = document.querySelector('.view-recipe');

class Recipe {
    constructor(title, servings, image, sourceUrl) {
        this._title = title;
        this._servings = servings;
        this._image = image;
        this._sourceUrl = sourceUrl;
    }
}

async function showRecipe() {
    let data = await getRecipe();
    let recipeData = data.recipes[0];

    let recipe = new Recipe(recipeData.title, 
        recipeData.servings, 
        recipeData.image,
        recipeData.sourceUrl);

    RECIPE_NAME.innerHTML = recipe._title;
    RECIPE_SERVINGS.innerHTML = recipe._servings;
    RECIPE_IMG.src = recipe._image;
    BTN_VIEW_RECIPE.href = recipe._sourceUrl;
}

async function refreshRecipe() {
    let data = await getRecipe();
    let recipeData = data.recipes[0];

    let recipe = new Recipe(recipeData.title, 
        recipeData.servings, 
        recipeData.image,
        recipeData.sourceUrl);

    RECIPE_NAME.innerHTML = recipe._title;
    RECIPE_SERVINGS.innerHTML = recipe._servings;
    RECIPE_IMG.src = recipe._image;
    BTN_VIEW_RECIPE.href = recipe._sourceUrl;
}

showRecipe();

BTN_REFRESH_RECIPE.addEventListener('click', refreshRecipe);