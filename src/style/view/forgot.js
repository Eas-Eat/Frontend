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

	emailText: {
		marginVertical: 8,
		borderRadius: 50,
		height: 48,
		backgroundColor: "white",
		paddingLeft: 24,
	},

	forgotView: {
		backgroundColor: "#8080A5",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginVertical: 8,
		height: 48,
	},

	forgotText: {
		color: "white",
		fontSize: 18,
		fontWeight: "800",
		width: 50,
	},
});
