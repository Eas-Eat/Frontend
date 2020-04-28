import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../style/view/recipe";

const data = [
	{
		name: "",
		steps: [
			{
				number: 1,
				step:
					"Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat.",
				ingredients: [
					{
						id: 11135,
						name: "cauliflower",
						image: "cauliflower.jpg",
					},
					{
						id: 4053,
						name: "olive oil",
						image: "olive-oil.jpg",
					},
				],
				equipment: [
					{
						id: 404645,
						name: "frying pan",
						image: "pan.png",
					},
				],
			},
			{
				number: 2,
				step:
					"Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside.",
				ingredients: [
					{
						id: 11135,
						name: "cauliflower",
						image: "cauliflower.jpg",
					},
					{
						id: 4053,
						name: "olive oil",
						image: "olive-oil.jpg",
					},
					{
						id: 12147,
						name: "pine nuts",
						image: "pine-nuts.png",
					},
					{
						id: 10211111,
						name: "sumac",
						image: "dried-sumac.jpg",
					},
					{
						id: 2047,
						name: "salt",
						image: "salt.jpg",
					},
				],
				equipment: [
					{
						id: 404645,
						name: "frying pan",
						image: "pan.png",
					},
				],
				length: {
					number: 15,
					unit: "minutes",
				},
			},
			{
				number: 3,
				step:
					"Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper.",
				ingredients: [
					{
						id: 18079,
						name: "breadcrumbs",
						image: "breadcrumbs.jpg",
					},
					{
						id: 1082047,
						name: "kosher salt",
						image: "salt.jpg",
					},
					{
						id: 4053,
						name: "olive oil",
						image: "olive-oil.jpg",
					},
				],
				equipment: [
					{
						id: 404645,
						name: "frying pan",
						image: "pan.png",
					},
				],
			},
			{
				number: 4,
				step:
					"Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",
				ingredients: [
					{
						id: 18079,
						name: "breadcrumbs",
						image: "breadcrumbs.jpg",
					},
					{
						id: 11135,
						name: "cauliflower",
						image: "cauliflower.jpg",
					},
					{
						id: 12147,
						name: "pine nuts",
						image: "pine-nuts.png",
					},
					{
						id: 11297,
						name: "parsley",
						image: "parsley.jpg",
					},
					{
						id: 2047,
						name: "salt",
						image: "salt.jpg",
					},
				],
				equipment: [],
			},
		],
	},
];
export default function Recipe({ navigation }) {
	const header = () => {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View>
					<TouchableOpacity
						style={{
							position: "relative",
							top: 30,
							left: 16,
							height: 50,
							width: 50,
							justifyContent: "center",
							alignItems: "center",
						}}
						onPress={() => navigation.goBack()}
					>
						<Ionicons name="ios-arrow-round-back" size={42} color="#696995" />
					</TouchableOpacity>
					<View style={{ position: "relative", top: 100, marginLeft: 26 }}>
						<Text style={{ fontSize: 25, fontWeight: "bold", fontFamily: "sans-serif-condensed" }}>
							Veggie Burger
						</Text>
						<Text style={{ color: "#545454", fontFamily: "sans-serif-condensed" }}>Spicy peanut sauce</Text>
					</View>
				</View>
				<Image
					style={{
						height: 275,
						width: 275,
						borderRadius: 1000,
						position: "relative",
						top: -55,
						right: 0,
					}}
					source={require("../assets/burger.jpeg")}
				/>
			</View>
		);
	};

	const ingredientsList = step => {
		return (
			<View style={{ marginTop: 8 }}>
				<Text style={{ color: "#545454", fontFamily: "sans-serif-condensed" }}>Ingredients :</Text>
				{step.ingredients.map((ingredient, index) => {
					return (
						<View
							key={index}
							style={{ flexDirection: "row", marginVertical: 4, marginTop: 12, alignItems: "center" }}
						>
							<Image
								style={{ height: 60, width: 60, marginRight: 16, borderRadius: 50 }}
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
			<View
				style={{
					flex: 3,
					backgroundColor: "#FAFAFA",
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					position: "relative",
					top: 30,
				}}
			>
				<ScrollView
					style={{
						backgroundColor: "#FAFAFA",
						borderTopLeftRadius: 40,
						borderTopRightRadius: 40,
						flex: 1,
					}}
				>
					{data[0].steps.map((step, index) => {
						return (
							<View key={index} style={{ flex: 1, marginHorizontal: 24, marginTop: 16 }}>
								<Text style={{ fontSize: 24, fontWeight: "bold", color: "#413A6C" }}>
									Step {step.number}
								</Text>
								{ingredientsList(step)}
								<Text style={{ marginTop: 32, textAlign: "justify" }}>{step.step}</Text>
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
