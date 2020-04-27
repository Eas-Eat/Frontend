import getEnvVars from "../../environment";

const { API_URL, API_KEY } = getEnvVars();

const request = async (method, endpoint, params) => {
	try {
		const response = await fetch(`${API_URL}${endpoint}${params}`, {
			method: method,
			headers: {
				"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				"x-rapidapi-key": API_KEY,
			},
		});
		return response.json();
	} catch (errors) {
		console.log(errors);
	}
};

export default {
	// Recipes
	listRecipes: ingredients =>
		request(
			"GET",
			"/recipes/findByIngredients",
			`?number=5&ranking=1&ignorePantry=false&ingredients=${ingredients}`
		),
	recipeInfo: recipeID => request("GET", "/recipes/", `${recipeID}/information`),
	recipeSummary: recipeID => request("GET", "/recipes/", `${recipeID}/summary`),
	recipeEquipment: recipeID => request("GET", "/recipes/", `${recipeID}/equipmentWidget.json`),
	recipeNutrition: recipeID => request("GET", "/recipes/", `${recipeID}/nutritionWidget.json`),

	// Ingredients
	listIngredients: name =>
		request("GET", "/food/ingredients/autocomplete?number=10&intolerances=egg&query=", `${name}`),

	// Others
	randomJoke: () => request("GET", "/food/jokes/random", ``),
};
