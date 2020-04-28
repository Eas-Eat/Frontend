import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import styles from "../style/view/recipes";

export default function Recipes() {
	const [randomNumber, setRandomNumber] = useState();

	useEffect(() => {
		getRandomNumber();
	}, []);

	const getRandomNumber = () => {
		setRandomNumber(Math.floor(Math.random() * 5) + 1);
	};

	const title = (firstHalf, secondHalf) => {
		return (
			<View style={styles.contenaireTitle}>
				<Text style={styles.title}>{firstHalf}</Text>
				<Text style={styles.subtitlte}>{secondHalf}</Text>
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

	const cardRecipe = () => {
		return (
			<View style={styles.containerCard}>
				<View style={styles.subContainerCard}>
					<Image style={styles.image} source={require("../assets/burger.jpeg")} />
					<View style={styles.cardContainerTitle}>
						<Text style={styles.cardTitle}>Veggie Burger</Text>
						<Text style={styles.cardSubTitle}>Spicy peanut sauce</Text>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.cardFooterText}>420</Text>
						<Text style={styles.cardFooterSubText}>kcal</Text>
					</View>
				</View>
			</View>
		);
	};

	const categoryBar = () => {
		return (
			<View style={styles.categoryContainer}>
				<View style={styles.containerBadge}>
					<View style={styles.badge}>
						<Entypo name="book" size={24} color="#8080A5" />
					</View>
					<Text style={styles.badgeText}>All</Text>
				</View>
				<View style={styles.containerBadge}>
					<View style={styles.badge}>
						<FontAwesome5 name="calendar-alt" size={24} color="#8080A5" />
					</View>
					<Text style={styles.badgeText}>Daily</Text>
				</View>
				<View style={styles.containerBadge}>
					<View style={styles.badge}>
						<Ionicons name="md-pizza" size={24} color="#8080A5" />
					</View>
					<Text style={styles.badgeText}>Italian</Text>
				</View>
				<View style={styles.containerBadge}>
					<View style={styles.badge}>
						<MaterialCommunityIcons name="rice" size={24} color="#8080A5" />
					</View>
					<Text style={styles.badgeText}>Asian</Text>
				</View>
			</View>
		);
	};
	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				{displaySentence()}
				{categoryBar()}
				{cardRecipe()}
			</View>
		);
	};

	return render();
}
