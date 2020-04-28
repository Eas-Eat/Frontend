import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./view/login";
import Register from "./view/register";
import Forgot from "./view/forgot";
import Home from "./view/home";
import Recipe from "./view/recipe";

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
				headerForceInset: { top: "never", bottom: "never" },
				headerStyle: {
					backgroundColor: "#FAFAFA",
					shadowOpacity: 0,
					shadowOffset: {
						height: 0,
					},
					shadowRadius: 0,
					elevation: 0,
				},
			},
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null,
			},
		},
		Recipe: {
			screen: Recipe,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: "Recipe",
	}
);

const AppContainer = createAppContainer(CreateStack);

export default AppContainer;
