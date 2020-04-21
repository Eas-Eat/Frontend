import React, { useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Form, Item, Input, Label, Button, Spinner, Text } from "native-base";

import useInput from "../hooks/useInput";
import { styles } from "../style/view/forgot";

export default function Forgot({ navigation }) {
	const [loading, setLoading] = useState(false);
	const email = useInput("");

	const send = async () => {
		return null;
	};

	const login = async () => {
		navigation.navigate("Login");
	};

	return (
		<>
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<View style={styles.mainContainer}>
					{!loading ? (
						<>
							<Form>
								<Item floatingLabel style={styles.item}>
									<Label>Email</Label>
									<Input autoCapitalize="none" {...email} />
								</Item>
							</Form>
							<View style={styles.buttonContainer}>
								<Button title="Connexion" onPress={() => send()} style={styles.button}>
									<Text style={styles.connectText}>Send Email</Text>
								</Button>
							</View>
						</>
					) : (
						<View style={styles.buttonContainer}>
							<Button style={styles.button}>
								<Spinner color="white" size="small" />
							</Button>
						</View>
					)}
				</View>
			</KeyboardAvoidingView>
			<View style={styles.formContainer}>
				<TouchableOpacity onPress={() => login()} style={styles.touchableOpacity}>
					<Text style={styles.formText}>Login</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
