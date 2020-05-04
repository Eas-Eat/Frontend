import { StyleSheet } from "react-native";

export default StyleSheet.create({
	keyboardAvoiding: {
		backgroundColor: "#DCE6FA",
		flex: 1,
		flexDirection: "column",
	},

	headerContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	headerTouchable: {
		position: "relative",
		top: 30,
		left: 16,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
	},

	headerContainerTitle: {
		position: "relative",
		top: 100,
		marginLeft: 26,
		width: 200,
	},

	headerTitle: {
		fontSize: 25,
		fontWeight: "bold",
		fontFamily: "sans-serif-condensed",
	},

	headerSubTitle: {
		color: "#545454",
		fontFamily: "sans-serif-condensed",
	},

	headerImg: {
		height: 275,
		width: 275,
		borderRadius: 1000,
		position: "relative",
		top: -55,
		right: 0,
	},

	listImgContainer: {
		flexDirection: "row",
		marginVertical: 4,
		marginTop: 12,
		alignItems: "center",
	},

	listImg: {
		height: 60,
		width: 60,
		marginRight: 16,
		borderRadius: 50,
	},

	recipeContainer: {
		flex: 3,
		backgroundColor: "#FAFAFA",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		position: "relative",
		top: 30,
	},

	recipeScrollview: {
		backgroundColor: "#FAFAFA",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		flex: 1,
	},

	recipeStep: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#413A6C",
		fontFamily: "sans-serif-condensed",
	},

	recipeParaph: {
		marginTop: 32,
		textAlign: "justify",
	},

	recipeBlock: {
		flex: 1,
		marginHorizontal: 24,
		marginTop: 16,
	},
});
