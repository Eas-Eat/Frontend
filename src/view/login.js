import React, { useState } from "react";
import { View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { Spinner } from "native-base";

import useInput from "../hooks/useInput";
import styles from "../style/view/login";

export default function Login({ navigation }) {
	const [loading, setLoading] = useState(false);
	const email = useInput("");
	const password = useInput("");

	const login = () => {
		return null;
	};

	const register = () => {
		navigation.navigate("Register");
	};

	const forgot = () => {
		navigation.navigate("Forgot");
	};

	return (
		<>
			<KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoiding}>
				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.textHeader}>Log in to your</Text>
						<Text style={styles.textHeader}>account</Text>
					</View>

					<View style={styles.form}>
						<TextInput placeholder="Email" style={styles.emailText} {...email} />

						<View style={styles.formPassword}>
							<View style={{ flex: 4 }}>
								<TextInput placeholder="Password" style={styles.passwordText} {...password} />
							</View>
							<TouchableOpacity
								style={styles.forgotTouchable}
								underlayColor="transparent"
								onPress={() => forgot()}
							>
								<View>
									<Text style={styles.forgotText}>Forgot{"?"}</Text>
								</View>
							</TouchableOpacity>
						</View>
						{!loading ? (
							<TouchableOpacity onPress={() => login()}>
								<View style={styles.loginView}>
									<Text style={styles.loginText}>Log in</Text>
								</View>
							</TouchableOpacity>
						) : (
							<TouchableOpacity>
								<View style={styles.loginView}>
									<Spinner color="white" size="small" />
								</View>
							</TouchableOpacity>
						)}
					</View>
				</ScrollView>

				<View style={styles.footer}>
					<Text style={styles.footerText}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => register()}>
						<Text style={styles.footerButton}>Sign up</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</>
	);
}
