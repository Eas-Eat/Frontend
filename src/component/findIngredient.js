import React from "react";
import { View, KeyboardAvoidingView, Text, TextInput } from "react-native";

import useInput from "../hooks/useInput";
import styles from "../style/component/findIngredient";

const findIngredient = () => {
	const ingredientSearch = useInput("");

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
			<View style={styles.mainContainer}>
				<Text>Search an ingredient: </Text>
				<TextInput {...ingredientSearch} style={styles.searchInput} />
			</View>
		</KeyboardAvoidingView>
	);
};

export default findIngredient;
