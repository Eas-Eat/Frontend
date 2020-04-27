import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import useInput from "../hooks/useInput";
import request from "../services/fetch";
import styles from "../style/view/ingredients";

export default function Ingredients() {
	const [list, setList] = useState(["oeuf", "salade"]);
	const [stateInput, setStateInput] = useState(false);

	const ingredientSearch = useInput("");

	const fetchIngredients = async () => {
		const res = await request("GET", "food/ingredients/autocomplete", `?number=10&query=${ingredientSearch.value}`);
		alert(JSON.stringify(res));
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
					<Ionicons name="md-close" size={28} color="red" />
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

	const addIngredientInput = () => {
		return (
			<View style={{ marginHorizontal: 32, alignItems: "center" }}>
				<Text>Search an ingredient: </Text>
				<TextInput {...ingredientSearch} style={styles.searchInput} />
				<Button onPress={fetchIngredients} title="Fetch ingredients" color="#841584" />
				<TouchableOpacity onPress={() => setStateInput(false)}>
					<Ionicons name="md-close" size={28} color="red" />
				</TouchableOpacity>
			</View>
		);
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
				{title()}
				<View style={{ flex: 6 }}>
					{list.map((item, index) => {
						return listIngredients(item, index);
					})}
					{stateInput ? addIngredientInput() : addIngredientText()}
				</View>
			</KeyboardAvoidingView>
		);
	};

	return render();
}
