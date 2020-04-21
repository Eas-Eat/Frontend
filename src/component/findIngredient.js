import React from "react";
import { View, KeyboardAvoidingView, Text, TextInput, Button } from "react-native";

import useInput from "../hooks/useInput";
import request from "../services/fetch";
import styles from "../style/component/findIngredient";

const findIngredient = () => {
	const ingredientSearch = useInput("");

	const fetchIngredients = async () => {
		const res = await request("GET", "food/ingredients/autocomplete", `?number=10&query=${ingredientSearch.value}`);
		alert(JSON.stringify(res));
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<View style={styles.mainContainer}>
					<Text>Search an ingredient: </Text>
					<TextInput {...ingredientSearch} style={styles.searchInput} />
					<Button onPress={fetchIngredients} title="Fetch ingredients" color="#841584" />
				</View>
			</KeyboardAvoidingView>
		);
	};

	return render();
};

export default findIngredient;
