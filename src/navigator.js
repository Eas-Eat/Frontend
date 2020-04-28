import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./view/login";
import Register from "./view/register";
import Forgot from "./view/forgot";
import Home from "./view/home";

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
	},
	{
		initialRouteName: "Register",
	}
);

const AppContainer = createAppContainer(CreateStack);

export default AppContainer;
