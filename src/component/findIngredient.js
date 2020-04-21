import React from "react";
import { View, KeyboardAvoidingView, Text, TextInput, Button } from "react-native";

import useInput from "../hooks/useInput";
import request from "../services/fetch";
import styles from "../style/component/findIngredient";

const findIngredient = () => {
	const ingredientSearch = useInput("");

	const fetchRecipes = async () => {
		const res = await request(
			"GET",
			"/recipes/findByIngredients",
			"?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar"
		);
		alert(JSON.stringify(res));
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<View style={styles.mainContainer}>
					<Text>Search an ingredient: </Text>
					<TextInput {...ingredientSearch} style={styles.searchInput} />
					<Button onPress={fetchRecipes} title="Fetch recipes" color="#841584" />
				</View>
			</KeyboardAvoidingView>
		);
	};

	return render();
};

export default findIngredient;
