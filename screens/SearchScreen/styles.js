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
		flexDirection: "column",
		padding: 15,	
	},
	title: {
		marginLeft: 20,
		marginRight: "auto",
		color: "white"
	},
	memos: {
		marginTop: "10%",
		padding: 20,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.67,
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
		marginBottom: 0,
		backgroundColor: "white",
		textAlignVertical: "top",
		borderRadius: 10,
		width: Dimensions.get("window").width * 0.8,
	},
	back: {
		marginTop: StatusBar.currentHeight,
		position: "absolute",
		padding: 5,
		top: 10,
		left: 20,
	},
});

export default styles;