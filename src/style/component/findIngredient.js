import { StyleSheet } from "react-native";

export default StyleSheet.create({
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

	searchInput: {
		height: 40,
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		margin: 10,
		paddingHorizontal: 10,
	},
});
