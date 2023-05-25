import { getRecipe } from "./Modules/API.js";

const NAVBAR_ICON = document.querySelector('.mobile-menu-icon');

NAVBAR_ICON.addEventListener('click', function (){
    let mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    } else {
        mobileMenu.classList.add('open');
    }
    this.classList.toggle("change");
});

/*const Home_Card = document.querySelector('.Home');
const interactive_card = document.querySelector('.interactive-card');

const Home_Button = document.querySelector('.enable-recipe-button');
const redirect_btn = document.querySelector('.redirect-btn');
const refresh_btn = document.querySelector('.refresh-recipe-btn');

const recipe_name = document.querySelector('.recipe-name');
const recipe_img = document.querySelector('.recipe-image');

function showRecipe(element,){
    element.addEventListener('click', async() => {
        let data = await getRecipe();

        console.log(data.recipes);

        Home_Card.style.display = 'none';
        interactive_card.style.opacity = 1;
        interactive_card.style.height = 'auto';

        refreshRecipe(refresh_btn);
        redirect_btn.href = data.recipes[0].sourceUrl;

        recipe_img.src = data.recipes[0].image;
        recipe_name.innerHTML = data.recipes[0].title;
    })
}

function refreshRecipe (element) {
    element.addEventListener('click', async() => {
        let data = await getRecipe();

        redirect_btn.href = data.recipes[0].sourceUrl;

        recipe_img.src = data.recipes[0].image;
        recipe_name.innerHTML = data.recipes[0].title;
    })
}

showRecipe(Home_Button);*/