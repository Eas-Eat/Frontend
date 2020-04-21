import React from "react";
import { View, KeyboardAvoidingView, Text, TextInput, Button } from "react-native";

import useInput from "../hooks/useInput";
import request from "../services/fetch";
import styles from "../style/component/findIngredient";

const findRecipes = () => {
	const recipeSearch = useInput("");

	const fetchRecipes = async () => {
		const res = await request(
			"GET",
			"/recipes/findByIngredients",
			`?number=5&ranking=1&ignorePantry=false&ingredients=${recipeSearch.value}`
		);
		alert(JSON.stringify(res));
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<View style={styles.mainContainer}>
					<Text>What do you have? </Text>
					<TextInput {...recipeSearch} style={styles.searchInput} />
					<Button onPress={fetchRecipes} title="Find recipes" color="#841584" />
				</View>
			</KeyboardAvoidingView>
		);
	};

	return render();
};

export default findRecipes;
