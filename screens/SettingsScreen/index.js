import styles from "./styles";
import { AppContext } from "../../Globals";
import { View, Pressable, Alert, Button } from "react-native";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import Title from "../../components/Title";
import RadioButtonList from "../../components/RadioButtonList";


const SettingsScreen = () => {
	const context = useContext(AppContext);
	const { setScreen, settings, setSettings } = context;

	const back = () => {
		setScreen("HomeScreen");
	}

	const handleViewChange = label => {
		setSettings({ ...settings, viewType: label });
	}

	const handleSortChange = label => {
		setSettings({ ...settings, sortBy: label });
	}

	const save = async () => {
		try {
			await AsyncStorage.setItem("@settings", JSON.stringify(settings));
			Alert.alert("Settings successfully saved!");
		} catch (e) {
			Alert.alert("Error saving settings!", e);
		}
	}

	const deleteAll = async () => {
		Alert.alert("Delete all memos?", "This action cannot be undone.", [
			{
				text: "Cancel",
			},
			{
				text: "Delete",
				onPress: async () => {
					try {
						Alert.alert("All memos deleted!");
						await AsyncStorage.removeItem("@memos");
					} catch (e) {
						Alert.alert("Error deleting memos!", e);
					}
				}
			}
		]);
	}
	
	return (
		<View style={styles.container}>
			<Pressable onPress={back}>
				<View style={styles.back}>
					<FontAwesomeIcon icon={Icons.faArrowLeftLong} color="white" size={20} />
				</View>
			</Pressable>

			<View style={styles.header}>
				<Title style={styles.title} text="Settings" />
			</View>

			<RadioButtonList title="View Type" values={["List", "Grid"]} selectedValue={settings.viewType} onChange={handleViewChange} />
			<RadioButtonList title="Sort By" values={["Date Created", "Colour"]} selectedValue={settings.sortBy} onChange={handleSortChange} />

			<View style={styles.saveButton}>
				<Button title="Save" color="#147ee2" onPress={save} />
			</View>
			<View style={styles.deleteButton}>
				<Button title="Delete All Memos" color="#e21414" onPress={deleteAll} />
			</View>
		</View>
	);
}

export default SettingsScreen;