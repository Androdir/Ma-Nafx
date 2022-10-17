import { Alert, StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MemoScreen from "./screens/MemoScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen"
import { useEffect, useState } from "react";
import { AppContext } from "./Globals";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
	const [ID, setID] = useState("");
	const [memos, setMemos] = useState([]);
	const [screen, setScreen] = useState("HomeScreen");
	const [selectedMemo, setSelectedMemo] = useState({});
	const [settings, setSettings] = useState({ viewType: "List", sortBy: "Date Created" });

	const loadSettings = async () => {
		try {
			const set = await AsyncStorage.getItem("@settings");
			setSettings(set == undefined ? settings : JSON.parse(set));
		} catch (e) {
			Alert.alert("An error has occured", e);
		}
	}

	useEffect(() => {
		loadSettings();
	}, []);

	const data = { ID, setID, memos, setMemos, setScreen, selectedMemo, setSelectedMemo, settings, setSettings };

	return (
		<AppContext.Provider value={data}>
			<View style={styles.container}>
				{screen === "HomeScreen" && <HomeScreen />}
				{screen === "MemoScreen" && <MemoScreen />}
				{screen === "SearchScreen" && <SearchScreen />}
				{screen === "SettingsScreen" && <SettingsScreen />}
			</View>

			<StatusBar style="light" />
		</AppContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
