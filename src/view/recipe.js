import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import styles from "../style/view/recipe";

export default function Recipe() {
	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				<Text>Hello Recipe</Text>
			</View>
		);
	};

	return render();
}
