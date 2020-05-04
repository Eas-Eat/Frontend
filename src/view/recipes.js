import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import fetch from "../services/fetch";
import styles from "../style/view/suggestions";

export default function Recipes({ navigation, ingredients }) {
	const [randomNumber, setRandomNumber] = useState();
	const [randomRecipes, setRandomRecipes] = useState(null);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		getRandomNumber();
		getRandomRecipe();
	}, []);

	const getRandomRecipe = async () => {
		const res = await fetch.randomRecipe();
		setRandomRecipes(res);
		console.log(res);
	};

	const getRandomNumber = () => {
		setRandomNumber(Math.floor(Math.random() * 5) + 1);
	};

	const onRecipe = (id, title) => {
		if (!load) {
			navigation.navigate("Recipe", { recipe: id, title: title });
		}
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

	const cardRecipe = item => {
		return (
			<TouchableOpacity onPress={() => onRecipe(item.id, item.title)} style={styles.containerCard}>
				<View style={styles.subContainerCard}>
					<Image
						style={styles.image}
						source={{
							uri: item.image,
						}}
					/>
					<View style={styles.cardContainerTitle}>
						<Text style={styles.cardTitle}>{item.title}</Text>
						<Text style={styles.cardSubTitle}>{item.usedIngredientCount} ingredients</Text>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.cardFooterText}>{item.likes}</Text>
						<Text style={styles.cardFooterSubText}>likes</Text>
					</View>
				</View>
			</TouchableOpacity>
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
				{randomRecipes ? (
					<FlatList
						style={{ flex: 1, marginTop: 4 }}
						data={randomRecipes.recipes}
						renderItem={({ item }) => {
							return cardRecipe(item);
						}}
						keyExtractor={item => `${item.id}`}
						removeClippedSubviews={true}
						initialNumToRender={2}
						maxToRenderPerBatch={1}
						updateCellsBatchingPeriod={50}
						windowSize={7}
						showsHorizontalScrollIndicator={false}
						horizontal
					/>
				) : (
					<Text>Loading...</Text>
				)}
			</View>
		);
	};

	return render();
}
