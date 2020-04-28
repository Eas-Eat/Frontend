import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Suggestions from "./suggestions";
import Ingrediants from "./ingredients";
import Recipes from "./recipes";
import styles from "../style/view/home";

export default function Home({ navigation }) {
	const [step, setStep] = useState(1);

	const router = () => {
		if (step === 1) {
			return <Suggestions />;
		}

		if (step === 2) {
			return <Ingrediants />;
		}

		if (step === 3) {
			return <Recipes navigation={navigation} />;
		}
	};
	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				<View style={styles.menuContainer}>
					<View style={styles.menuIconContainer}>
						<View style={styles.menuIcon}>
							<Ionicons name="md-menu" size={24} color="#8080A5" />
						</View>
						<View style={styles.menuIcon}>
							<Ionicons name="md-search" size={24} color="#8080A5" />
						</View>
					</View>
					<View style={styles.menuButtonContainer}>
						<TouchableOpacity style={styles.menuTouchableOpacity} onPress={() => setStep(1)}>
							<View style={styles.menuViewText}>
								<Text style={step == 1 ? styles.menuTextSelected : styles.menuText}>Suggestions</Text>
								{step == 1 ? (
									<>
										<View style={styles.menuPearl}></View>
										<View style={styles.menuNotch}></View>
									</>
								) : null}
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuTouchableOpacity} onPress={() => setStep(2)}>
							<View style={styles.menuViewText}>
								<Text style={step == 2 ? styles.menuTextSelected : styles.menuText}>
									My Ingredients
								</Text>
								{step == 2 ? (
									<>
										<View style={styles.menuPearl}></View>
										<View style={styles.menuNotch}></View>
									</>
								) : null}
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuTouchableOpacity} onPress={() => setStep(3)}>
							<View style={styles.menuViewText}>
								<Text style={step == 3 ? styles.menuTextSelected : styles.menuText}>Recipes</Text>
								{step == 3 ? (
									<>
										<View style={styles.menuPearl}></View>
										<View style={styles.menuNotch}></View>
									</>
								) : null}
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ flex: 6, zIndex: -2 }}>{router()}</View>
			</View>
		);
	};

	return render();
}
