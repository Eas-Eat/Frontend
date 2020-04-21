import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { Form, Item, Input, Label, Button, Spinner, Text } from "native-base";

import useInput from "../hooks/useInput";
import { styles } from "../style/view/register";

export default function Register({ navigation }) {
	const [loading, setLoading] = useState(false);
	const nickname = useInput("");
	const email = useInput("");
	const password = useInput("");
	const passwordConfirm = useInput("");

	const register = () => {
		navigation.navigate("Login");
	};

	const login = () => {
		navigation.navigate("Login");
	};

	const render = () => {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding} enabled>
				<ScrollView>
					<View style={styles.mainContainer}>
						<Form>
							<Item floatingLabel style={styles.item}>
								<Label>Nickname</Label>
								<Input {...nickname} />
							</Item>
							<Item floatingLabel style={styles.item}>
								<Label>Email</Label>
								<Input autoCapitalize="none" {...email} />
							</Item>
							<Item floatingLabel style={styles.item}>
								<Label>Password</Label>
								<Input secureTextEntry={true} autoCapitalize="none" {...password} />
							</Item>
							<Item floatingLabel style={styles.item}>
								<Label>PasswordConfirm</Label>
								<Input secureTextEntry={true} autoCapitalize="none" {...passwordConfirm} />
							</Item>
						</Form>
						{!loading ? (
							<View style={styles.buttonContainer}>
								<Button title="Connexion" onPress={() => register()} style={styles.button}>
									<Text style={styles.registerText}>Register</Text>
								</Button>
								<TouchableOpacity onPress={() => login()} style={styles.touchableOpacity}>
									<Text style={styles.formText}>Already have an account ?</Text>
								</TouchableOpacity>
							</View>
						) : (
							<View style={styles.buttonContainer}>
								<Button style={styles.button}>
									<Spinner color="white" size="small" />
								</Button>
							</View>
						)}
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	};

	return render();
}
