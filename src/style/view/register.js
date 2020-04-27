import { StyleSheet } from "react-native";

export default StyleSheet.create({
	keyboardAvoiding: {
		backgroundColor: "#FAFAFA",
		flex: 1,
		paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
	},

	header: {
		marginHorizontal: 32,
		marginVertical: 64,
	},

	textHeader: {
		color: "#8080A5",
		fontWeight: "bold",
		fontSize: 32,
	},

	form: {
		display: "flex",
		flexDirection: "column",
		marginHorizontal: 32,
	},

	input: {
		marginVertical: 8,
		borderRadius: 50,
		height: 48,
		backgroundColor: "white",
		paddingLeft: 24,
	},

	signupView: {
		backgroundColor: "#8080A5",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginVertical: 8,
		height: 48,
	},

	signupText: {
		color: "white",
		fontSize: 18,
		fontWeight: "800",
		width: 65,
	},

	footer: {
		marginHorizontal: 32,
		marginBottom: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flex: 0.1,
	},

	footerText: {
		fontWeight: "500",
		fontSize: 16,
		width: 200,
		textAlign: "center",
	},

	footerButton: {
		color: "#8080A5",
		fontWeight: "bold",
		fontSize: 16,
		width: 80,
	},
});
