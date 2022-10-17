import { StyleSheet, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0a0a0a",
	},
	header: {
		marginTop: StatusBar.currentHeight * 2,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
	},
	title: {
		marginLeft: 20,
		marginRight: "auto",
		color: "white"
	},
	inputs: {
		marginTop: "10%",
		padding: 20,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.6,
		borderTopColor: "white",
		borderTopWidth: 1,
		borderTopStartRadius: 100,
		borderTopEndRadius: 100,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		borderBottomStartRadius: 100,
		borderBottomEndRadius: 100,
	},
	input: {
		padding: 10,
		margin: 10,
		backgroundColor: "white",
		textAlignVertical: "top",
		borderRadius: 10,
	},
	contentInput: {
		height: "80%",
	},
	icons: {
		bottom: "5%",
		borderRadius: 30,
		position: "absolute",
		width: "100%",
		flexDirection: "row-reverse",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	iconContainer: {
		borderRadius: 100,
		backgroundColor: "white",
	},
	icon: {
		padding: 15,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.7)",
	},
	modal: {
		backgroundColor: "#0a0a0a",
		borderRadius: 10,
		padding: 20,
		width: "80%",

	},
	modalColours: {
		justifyContent: "space-evenly",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	modalColumn: {
		flexDirection: "column",
		margin: 10,
	},
	modalTitle: {
		color: "white",
		fontSize: 30,
		marginBottom: 20,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		width: "100%",
	},
	colour: {
		marginBottom: 5,
	},
	back: {
		marginTop: StatusBar.currentHeight,
		position: "absolute",
		padding: 5,
		top: 10,
		left: 20,
	},
	saveButton: {
		marginTop: "5%",
		justifyContent: "center",
		flexDirection: "row",
	},
	googleButton: {
		marginTop: "5%",
		justifyContent: "center",
		flexDirection: "row",
	},
	deleteButton: {
		marginTop: "30%",
		justifyContent: "center",
		flexDirection: "row",
		padding: 10,
	}
});

export default styles;