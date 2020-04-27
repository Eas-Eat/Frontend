import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./view/login";
import Register from "./view/register";
import Forgot from "./view/forgot";

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
	},
	{
		initialRouteName: "Login",
	}
);

const AppContainer = createAppContainer(CreateStack);

export default AppContainer;
