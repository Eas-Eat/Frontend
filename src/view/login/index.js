import React, { useState } from "react";
import { styles } from "./styles";
import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Form, Item, Input, Label, Button, Spinner, Text } from "native-base";
import useInput from "../../hooks/useInput";

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
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<View style={styles.mainContainer}>
					{!loading ? (
						<>
							<Form>
								<Item floatingLabel style={styles.item}>
									<Label>Email / Pseudo</Label>
									<Input autoCapitalize="none" {...email} />
								</Item>
								<Item floatingLabel style={styles.item}>
									<Label>Password</Label>
									<Input secureTextEntry={true} {...password} autoCapitalize="none" />
								</Item>
							</Form>
							<View style={styles.buttonContainer}>
								<Button title="Connexion" onPress={() => login()} style={styles.button}>
									<Text style={styles.connectText}>Sign In</Text>
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
				<TouchableOpacity onPress={() => register()} style={styles.touchableOpacity}>
					<Text style={styles.formText}>Create an account here</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => forgot()} style={styles.touchableOpacity}>
					<Text style={styles.formText}>Forgot password ?</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
