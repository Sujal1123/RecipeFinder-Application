import axios from "axios";

export async function searchRecipes(query) {
    const responce = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    return responce.data.meals;
}