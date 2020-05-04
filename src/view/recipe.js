import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import fetch from "../services/fetch";
import styles from "../style/view/recipe";

export default function Recipe({ navigation }) {
	const { recipe, title } = navigation.state.params;
	const [steps, setSteps] = useState();

	useEffect(() => {
		getSteps();
	}, []);

	const getSteps = async () => {
		const res = await fetch.recipeInstructions(recipe);
		setSteps(res[0].steps);
	};

	const header = () => {
		return (
			<View style={styles.headerContainer}>
				<View>
					<TouchableOpacity style={styles.headerTouchable} onPress={() => navigation.goBack()}>
						<Ionicons name="ios-arrow-round-back" size={42} color="#696995" />
					</TouchableOpacity>
					<View style={styles.headerContainerTitle}>
						<Text style={styles.headerTitle}>{title}</Text>
					</View>
				</View>
				<Image style={styles.headerImg} source={require("../assets/burger.jpeg")} />
			</View>
		);
	};

	const ingredientsList = step => {
		return (
			<View style={{ marginTop: 8 }}>
				<Text style={styles.headerSubTitle}>Ingredients :</Text>
				{step.ingredients.map((ingredient, index) => {
					return (
						<View key={index} style={styles.listImgContainer}>
							<Image
								style={styles.listImg}
								source={{
									uri: `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`,
								}}
							/>
							<Text>{ingredient.name}</Text>
						</View>
					);
				})}
			</View>
		);
	};

	const recipeInstruction = () => {
		return (
			<View style={styles.recipeContainer}>
				<ScrollView style={styles.recipeScrollview}>
					{steps &&
						steps.map((step, index) => {
							return (
								<View key={index} style={styles.recipeBlock}>
									<Text style={styles.recipeStep}>Step {step.number}</Text>
									{ingredientsList(step)}
									<Text style={styles.recipeParaph}>{step.step}</Text>
								</View>
							);
						})}
				</ScrollView>
			</View>
		);
	};

	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				{header()}
				{recipeInstruction()}
			</View>
		);
	};

	return render();
}
