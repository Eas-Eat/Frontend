import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../style/view/home";

export default function Home() {
	const [step, setStep] = useState(1);

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
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
								<Text style={step == 1 ? styles.menuTextSelected : styles.menuText}>Proposal</Text>
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

				<View style={{ flex: 6 }}>
					<Text>Hello World</Text>
				</View>
			</KeyboardAvoidingView>
		);
	};

	return render();
}
