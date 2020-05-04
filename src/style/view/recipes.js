import { StyleSheet } from "react-native";

export default StyleSheet.create({
	keyboardAvoiding: {
		backgroundColor: "#FAFAFA",
		flex: 1,
		flexDirection: "column",
	},

	contenaireTitle: {
		flex: 1,
		marginTop: 52,
		marginLeft: 30,
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
		fontFamily: "sans-serif-condensed",
	},

	subtitlte: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#5858FA",
		fontFamily: "sans-serif-condensed",
	},

	containerCard: {
		backgroundColor: "#FAFAFA",
		flex: 6,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},

	subContainerCard: {
		backgroundColor: "#DCE6FA",
		width: 250,
		height: 400,
		borderRadius: 10,
	},

	image: {
		height: 175,
		width: 175,
		borderRadius: 500,
		top: -28,
		left: -18,
	},

	cardContainerTitle: {
		marginLeft: 16,
	},

	cardTitle: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "sans-serif-condensed",
	},

	cardSubTitle: {
		color: "#545454",
		fontFamily: "sans-serif-condensed",
	},

	cardFooter: {
		marginLeft: 16,
		flexDirection: "row",
		bottom: 10,
		position: "absolute",
	},

	cardFooterText: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "sans-serif-condensed",
		marginRight: 4,
		marginBottom: -2,
	},

	cardFooterSubText: {
		color: "#1A605B",
		fontFamily: "sans-serif-condensed",
		textAlignVertical: "bottom",
	},

	categoryContainer: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},

	containerBadge: {
		flexDirection: "column",
		alignItems: "center",
	},

	badge: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: "#DCE6FA",
		alignItems: "center",
		justifyContent: "center",
	},

	badgeText: {
		fontFamily: "sans-serif-condensed",
		marginTop: 4,
	},
});
