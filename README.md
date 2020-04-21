# frontend

## Setup

-   `npm install`
-   Create `environment.js` file at root folder
-   Add this content to env file :

```
const ENV = {
	dev: {
		API_URL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/",
		API_KEY: "your_api_key",
	},
	prod: {},
};

const getEnvVars = () => {
	return ENV.dev;
};

export default getEnvVars;

```
