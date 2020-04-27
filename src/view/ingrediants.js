import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text, Image } from "react-native";

import styles from "../style/view/ingrediants";

export default function Ingrediants() {
	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
				<Text>Ingrediants</Text>
			</KeyboardAvoidingView>
		);
	};

	return render();
}
