import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
	keyboardAvoiding: {
		flex: 3,
		flexDirection: "column",
		paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
		alignItems: "center",
	},

	mainContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},

	item: {
		width: "60%",
		alignSelf: "center",
	},

	button: {
		backgroundColor: "#000",
		width: vmin(60),
		justifyContent: "center",
		alignSelf: "center",
	},

	buttonContainer: {
		marginTop: 36,
		justifyContent: "center",
		width: vmin(100),
	},

	connectText: {
		color: "white",
	},

	formContainer: {
		flex: 1,
	},

	touchableOpacity: {
		padding: 2,
		alignItems: "center",
	},

	formText: {
		color: "#000",
	},
});

export { styles };
