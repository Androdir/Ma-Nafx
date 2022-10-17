import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		flexDirection: "row",
		padding: 10,
		justifyContent: "center",
	},
	inner: {
		marginTop: 15,
		padding: 10,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "white",
		backgroundColor: "#c7c7c7",
	},
	buttonContainer: {
		marginLeft: 15,
		flexDirection: "row",
	},
	radioButton: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	radioButtonChecked: {
		backgroundColor: "#1ed8ed",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	label: {
		margin: 8,
		marginTop: 0,
	},
});

export default styles;