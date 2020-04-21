import getEnvVars from "../../environment";

const { API_URL, API_KEY } = getEnvVars();

export default async function request(method, endpoint, params) {
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
}
