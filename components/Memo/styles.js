import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	pressable: {
		padding: 10,
	},
	container: {
		borderRadius: 10,
		height: 75,
		marginBottom: 10,
		justifyContent: "space-evenly",
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	content: {
		width: "60%",
		fontSize: 15,
	},
	date: {
		fontSize: 15,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 15,
	},
});

export default styles;