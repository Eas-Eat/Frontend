import React, { useState } from "react";
import { styles } from "./styles";
import { View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";

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
			<KeyboardAvoidingView behavior="padding" enabled style={{ backgroundColor: "#FAFAFA", flex: 1 }}>
				<ScrollView>
					<View style={{ marginHorizontal: 32, marginVertical: 64 }}>
						<Text style={{ color: "#8080A5", fontWeight: "bold", fontSize: 32 }}>Log in to your</Text>
						<Text style={{ color: "#8080A5", fontWeight: "bold", fontSize: 32 }}>account</Text>
					</View>

					<View style={{ display: "flex", flexDirection: "column", marginHorizontal: 32 }}>
						<TextInput
							placeholder="Email"
							style={{
								marginVertical: 8,
								borderRadius: 50,
								height: 48,
								backgroundColor: "white",
								paddingLeft: 24,
							}}
						/>

						<View style={{ display: "flex", flexDirection: "row" }}>
							<View style={{ flex: 4 }}>
								<TextInput
									placeholder="Password"
									style={{
										marginVertical: 8,
										borderTopLeftRadius: 50,
										borderBottomLeftRadius: 50,
										height: 48,
										backgroundColor: "white",
										paddingLeft: 24,
									}}
								/>
							</View>
							<TouchableOpacity
								style={{
									flex: 1,
									alignItems: "center",
									justifyContent: "center",
									borderTopRightRadius: 50,
									borderBottomRightRadius: 50,
									backgroundColor: "white",
									height: 48,
									marginVertical: 8,
								}}
								underlayColor="transparent"
								onPress={() => forgot()}
							>
								<View>
									<Text style={{ color: "#8080A5", fontSize: 14 }}>Forgot{"?"}</Text>
								</View>
							</TouchableOpacity>
						</View>

						<TouchableOpacity onPress={() => login()}>
							<View
								style={{
									backgroundColor: "#8080A5",
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 50,
									marginVertical: 8,
									height: 48,
								}}
							>
								<Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>Log in</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>

				<View
					style={{
						marginHorizontal: 32,
						marginBottom: 16,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						flex: 0.1,
					}}
				>
					<Text
						style={{
							fontWeight: "500",
							fontSize: 16,
							width: 200,
							textAlign: "center",
						}}
					>
						Don't have an account?
					</Text>
					<Text
						style={{
							color: "#8080A5",
							fontWeight: "bold",
							fontSize: 16,
							width: 80,
						}}
					>
						Sign up
					</Text>
				</View>
				{/* {!loading ? (
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
					)} */}
			</KeyboardAvoidingView>
			{/* <View style={styles.formContainer}>
				<TouchableOpacity onPress={() => register()} style={styles.touchableOpacity}>
					<Text style={styles.formText}>Create an account here</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => forgot()} style={styles.touchableOpacity}>
					<Text style={styles.formText}>Forgot password ?</Text>
				</TouchableOpacity>
			</View> */}
		</>
	);
}
