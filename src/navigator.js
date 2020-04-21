import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Login from "./view/login";
import Register from "./view/register";
import Forgot from "./view/forgot";
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
		// This component is a test, remove it in release
		FindIngredient: {
			screen: FindIngredient,
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
