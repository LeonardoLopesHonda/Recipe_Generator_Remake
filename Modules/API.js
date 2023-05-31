const API_KEY = 'fb3745d073744775a9f593b5c7fac4ed';
// const API_KEY = '4fa051d563264d8bac24cbfdfa54b300';
const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`;

async function getRecipe() {
    try {
        const response = await fetch(URL);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export { getRecipe };