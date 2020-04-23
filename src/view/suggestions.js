import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";

import styles from "../style/view/suggestions";

export default function Suggestions() {
	const [randomNumber, setRandomNumber] = useState();

	useEffect(() => {
		getRandomNumber();
	}, []);

	const getRandomNumber = () => {
		setRandomNumber(Math.floor(Math.random() * 5) + 1);
	};

	const title = (firstHalf, secondHalf) => {
		return (
			<View style={{ flex: 1, marginTop: 52, marginLeft: 24 }}>
				<Text style={{ fontSize: 25, fontWeight: "bold", fontFamily: "sans-serif-condensed" }}>
					{firstHalf}
				</Text>
				<Text
					style={{
						fontSize: 25,
						fontWeight: "bold",
						color: "#5858FA",
						fontFamily: "sans-serif-condensed",
					}}
				>
					{secondHalf}
				</Text>
			</View>
		);
	};

	const displaySentence = () => {
		if (randomNumber === 1) {
			return title("Simple way to find", "tasty recipes");
		}

		if (randomNumber === 2) {
			return title("Cook like a", "chef");
		}

		if (randomNumber === 3) {
			return title("Inspiring and", "tasty recipes");
		}

		if (randomNumber === 4) {
			return title("The recipe of", "happiness");
		}

		if (randomNumber === 5) {
			return title("Cooking made", "easy");
		}
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
				{displaySentence()}
			</KeyboardAvoidingView>
		);
	};

	return render();
}
