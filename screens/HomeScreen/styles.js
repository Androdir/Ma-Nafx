import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
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
	icon: {
		marginLeft: 10,
		borderRadius: 100,
	},
	title: {
		marginLeft: 20,
		position: "relative",
		marginRight: "auto",
		color: "white"
	},
	list: {
		marginTop: "10%",
		padding: 20,
		width: "100%",
		height: "60%",
		borderTopColor: "white",
		borderTopWidth: 1,
		borderTopStartRadius: 100,
		borderTopEndRadius: 100,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		borderBottomStartRadius: 100,
		borderBottomEndRadius: 100,
	},
	addContainer: {
		bottom: 20,
		right: 20,
		position: "absolute",
		borderRadius: 30,
		backgroundColor: "white",
	},
	add: {
		padding: 15,
	},
});

export default styles;