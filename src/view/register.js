import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { Spinner } from "native-base";

import useInput from "../hooks/useInput";
import styles from "../style/view/register";

export default function Register({ navigation }) {
	const [loading, setLoading] = useState(false);
	const username = useInput("");
	const email = useInput("");
	const password = useInput("");

	const register = () => {
		navigation.navigate("Login");
	};

	const login = () => {
		navigation.navigate("Login");
	};

	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.textHeader}>Create your</Text>
						<Text style={styles.textHeader}>account</Text>
					</View>

					<View style={styles.form}>
						<TextInput placeholder="Username" style={styles.input} {...username} />
						<TextInput placeholder="Email" style={styles.input} {...email} />
						<TextInput placeholder="Password" style={styles.input} {...password} />

						{!loading ? (
							<TouchableOpacity onPress={() => register()}>
								<View style={styles.signupView}>
									<Text style={styles.signupText}>Sign up</Text>
								</View>
							</TouchableOpacity>
						) : (
							<TouchableOpacity>
								<View style={styles.signupView}>
									<Spinner color="white" size="small" />
								</View>
							</TouchableOpacity>
						)}
					</View>
				</ScrollView>

				<View style={styles.footer}>
					<Text style={styles.footerText}>Already an account?</Text>
					<TouchableOpacity onPress={() => login()}>
						<Text style={styles.footerButton}>Log in</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return render();
}
