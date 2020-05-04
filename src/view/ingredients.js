import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { addFood } from "../services/graphql";
import request from "../services/fetch";
import styles from "../style/view/ingredients";

export default function Ingredients({ userId, ingredients, setIngredients }) {
	const [stateInput, setStateInput] = useState(false);
	const [query, setQuery] = useState("");
	const [ingredientSearch, setIngredientSearch] = useState("");
	const [foodId, setFoodId] = useState();
	const [, setState] = useState();
	const [performAddInredient] = useMutation(addFood, {
		variables: { userId, foodId },
	});

	useEffect(() => {
		if (foodId) {
			// Back is not working yet
			// console.log("userId: ", userId, " - foodId: ", foodId);
			// performAddInredient();
		}
	}, [foodId]);

	const fetchIngredients = async e => {
		setIngredientSearch(e);
		const res = await request.listIngredients(e);
		setQuery(res);
	};

	const removeIngredient = item => {
		const test = ingredients;
		test.pop();
		setIngredients(test);
		setState({});
	};

	const onClose = () => {
		setStateInput(false);
		setIngredientSearch("");
		setQuery("");
	};

	const onSelectedIngredient = item => {
		setIngredients([...ingredients, item]);
		setStateInput(false);
		setIngredientSearch("");
		setQuery("");
	};
	const title = () => {
		return (
			<View style={styles.contenaireTitle}>
				<Text style={styles.title}>List of your</Text>
				<Text style={styles.subtitlte}>ingredients</Text>
			</View>
		);
	};

	const listIngredients = (item, index) => {
		return (
			<View key={index} style={{ marginHorizontal: 32 }}>
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
					<Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed", marginLeft: 8 }}>{item}</Text>
					<TouchableOpacity onPress={() => removeIngredient(item)}>
						<Ionicons name="md-close" size={28} color="red" />
					</TouchableOpacity>
				</View>
				<View style={{ height: 1, width: "100%", backgroundColor: "#DCE6FA", marginVertical: 8 }}></View>
			</View>
		);
	};

	const addIngredientText = () => {
		return (
			<TouchableOpacity
				onPress={() => setStateInput(true)}
				style={{ marginHorizontal: 32, flexDirection: "row", alignItems: "center" }}
			>
				<Ionicons name="md-add" size={28} color="#8080A5" />
				<Text style={{ marginLeft: 8, fontSize: 20, fontFamily: "sans-serif-condensed", color: "#8080A5" }}>
					Add an ingredient
				</Text>
			</TouchableOpacity>
		);
	};

	const suggestions = () => {
		let res = [];
		query &&
			query.forEach((item, index) => {
				res.push(
					<View key={index}>
						<TouchableOpacity
							style={{
								paddingLeft: 16,
								paddingVertical: 8,
								justifyContent: "center",
							}}
							onPress={() => {
								setFoodId(`${item.id}`);
								onSelectedIngredient(item.name);
							}}
						>
							<Text style={{ fontSize: 16, fontFamily: "sans-serif-condensed" }}>{item.name}</Text>
						</TouchableOpacity>
						<View
							style={{ height: 1, width: "100%", backgroundColor: "#DCE6FA", marginVertical: 0 }}
						></View>
					</View>
				);
			});
		return <View>{res}</View>;
	};

	const addIngredientInput = () => {
		return (
			<View style={{ marginHorizontal: 32 }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<TextInput
						onChangeText={e => fetchIngredients(e)}
						value={ingredientSearch}
						style={{ borderBottomWidth: 1, borderColor: "#8080A5", flex: 1, marginRight: 16 }}
						placeholder="Your new ingredient"
					/>
					<TouchableOpacity onPress={() => onClose(false)}>
						<Ionicons name="md-close" size={28} color="red" />
					</TouchableOpacity>
				</View>
				{query ? (
					<ScrollView
						keyboardShouldPersistTaps="handle"
						style={{
							borderWidth: 0.5,
							borderColor: "#8080A5",
							borderTopWidth: 0,
							marginRight: 32,
							height: 250,
						}}
					>
						{suggestions()}
					</ScrollView>
				) : null}
			</View>
		);
	};

	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				{title()}
				<View style={{ flex: 6 }}>
					{ingredients.map((item, index) => {
						return listIngredients(item, index);
					})}
					{stateInput ? addIngredientInput() : addIngredientText()}
				</View>
			</View>
		);
	};

	return render();
}
