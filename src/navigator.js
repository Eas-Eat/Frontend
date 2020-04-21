import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./view/login";
import Register from "./view/register";
import Forgot from "./view/forgot";
import FindRecipes from "./component/findRecipes";
import FindIngredient from "./component/findIngredient";

const CreateStack = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: () => ({
				header: null,
			}),
		},
		Register: {
			screen: Register,
			navigationOptions: {
				header: null,
			},
		},
		Forgot: {
			screen: Forgot,
			navigationOptions: {
				header: null,
			},
		},
		// This components are tests, remove these in release
		FindRecipes: {
			screen: FindRecipes,
			navigationOptions: {
				header: null,
			},
		},
		FindIngredient: {
			screen: FindIngredient,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: "FindIngredient",
	}
);

const AppContainer = createAppContainer(CreateStack);

export default AppContainer;
