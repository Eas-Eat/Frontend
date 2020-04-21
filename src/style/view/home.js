import { StyleSheet } from "react-native";

export default StyleSheet.create({
	keyboardAvoiding: {
		backgroundColor: "#FAFAFA",
		flex: 1,
		flexDirection: "row",
	},

	menuContainer: {
		backgroundColor: "#DCE6FA",
		flex: 1,
	},

	menuIconContainer: {
		margin: 4,
		flex: 1,
		justifyContent: "space-evenly",
	},

	menuIcon: {
		margin: 4,
		alignItems: "center",
		justifyContent: "center",
	},

	menuButtonContainer: {
		margin: 4,
		flex: 3,
		justifyContent: "space-evenly",
	},

	menuTouchableOpacity: {
		margin: 4,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},

	menuText: {
		width: 150,
		textAlign: "center",
		transform: [{ rotate: "-90deg" }],
		color: "#8080A5",
	},

	menuTextSelected: {
		width: 150,
		textAlign: "center",
		transform: [{ rotate: "-90deg" }],
		color: "#413A6C",
		fontWeight: "700",
	},
});
