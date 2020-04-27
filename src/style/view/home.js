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

	menuViewText: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transform: [{ rotate: "-90deg" }],
	},

	menuText: {
		width: 150,
		textAlign: "center",
		color: "#8080A5",
	},

	menuTextSelected: {
		width: 150,
		textAlign: "center",
		color: "#696995",
		fontWeight: "700",
	},

	menuPearl: {
		height: 6,
		width: 6,
		backgroundColor: "#8080A5",
		position: "absolute",
		top: 25,
		borderRadius: 50,
	},

	menuNotch: {
		overflow: "hidden",
		transform: [{ rotate: "45deg" }],
		height: 150,
		width: 150,
		backgroundColor: "red",
		position: "absolute",
		top: -115,
		borderRadius: 25,
		zIndex: -1,
		backgroundColor: "#DCE6FA",
	},
});
