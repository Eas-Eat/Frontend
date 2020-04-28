import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { Spinner } from "native-base";

import useInput from "../hooks/useInput";
import styles from "../style/view/forgot";

export default function Forgot() {
	const [loading, setLoading] = useState(false);
	const email = useInput("");

	const send = async () => {
		return null;
	};

	const render = () => {
		return (
			<View style={styles.keyboardAvoiding}>
				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.textHeader}>Forgot password</Text>
					</View>

					<View style={styles.form}>
						<TextInput placeholder="Email" style={styles.emailText} {...email} />

						{!loading ? (
							<TouchableOpacity onPress={() => send()}>
								<View style={styles.forgotView}>
									<Text style={styles.forgotText}>Send</Text>
								</View>
							</TouchableOpacity>
						) : (
							<TouchableOpacity>
								<View style={styles.forgotView}>
									<Spinner color="white" size="small" />
								</View>
							</TouchableOpacity>
						)}
					</View>
				</ScrollView>
			</View>
		);
	};

	return render();
}
