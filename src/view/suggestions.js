import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../style/view/suggestions";

export default function Suggestions() {
	const [step, setStep] = useState(1);

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
				<Text>Suggestions</Text>
			</KeyboardAvoidingView>
		);
	};

	return render();
}
