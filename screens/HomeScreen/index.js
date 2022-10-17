import styles from "./styles";
import { AppContext, colours } from "../../Globals";
import { View, Pressable, FlatList, Settings } from "react-native";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import Title from "../../components/Title";
import Memo from "../../components/Memo";

const HomeScreen = () => {
	const context = useContext(AppContext);

	// delete all memos
	const deleteAll = async () => {
		try {
			await AsyncStorage.removeItem("@memos");
			context.setMemos([]);
		} catch (e) {
			alert("Error deleting memos.");
		}
	}
	// deleteAll()

	const loadMemos = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("@memos")
			context.setMemos(jsonValue != null ? JSON.parse(jsonValue) : []);
		} catch (e) {
			alert(e);
		}
	}

	const saveMemos = async () => {
		try {
			await AsyncStorage.setItem("@memos", JSON.stringify(context.memos));
		} catch (e) {
			alert(e);
		}
	}

	const createMemo = async () => {
		context.setScreen("MemoScreen");
	}

	useEffect(() => {
		loadMemos();
	}, []);

	useEffect(() => {
		saveMemos();
	}, [context.memos]);

	let sortedMemos;
	if (context.settings.sortBy === "Date Created") {
		sortedMemos = context.memos.sort((a, b) => {
			if (a.isPinned && !b.isPinned) return -1;
			if (!a.isPinned && b.isPinned) return 1;
			if (a.date > b.date) return -1;
			if (a.date < b.date) return 1;
			return 0;
		});
	} else {
		sortedMemos = context.memos.sort((a, b) => {
			if (a.isPinned && !b.isPinned) return -1;
			if (!a.isPinned && b.isPinned) return 1;
			if (colours.indexOf(a.colour) > colours.indexOf(b.colour)) return -1;
			if (colours.indexOf(a.colour) < colours.indexOf(b.colour)) return 1;
			return 0;
		});
	}

	return (
		<View style={styles.container}>

			<View style={styles.header}>
				<Title style={styles.title} text="Memos" />

				<Pressable
					style={styles.icon}
					android_ripple={{ color: "white", borderless: true }}
					onPress={() => context.setScreen("SearchScreen")}
				>
					<FontAwesomeIcon icon={Icons.faSearch} color="white" size={20} />
				</Pressable>

				<Pressable
					style={styles.icon}
					android_ripple={{ color: "white", borderless: true }}
					onPress={() => context.setScreen("SettingsScreen")}
				>
					<FontAwesomeIcon icon={Icons.faGear} color="white" size={20} />
				</Pressable>
			</View>

			<View style={styles.list}>
				<FlatList
					data={sortedMemos}
					renderItem={({ item }) => <Memo content={item.content} title={item.title} date={item.date} colour={item.colour} isPinned={item.isPinned} />}
					showsVerticalScrollIndicator={true}
					keyExtractor={(item, index) => index.toString()}
					decelerationRate="normal"
				/>
			</View>

			<View style={styles.addContainer}>
				<Pressable onPress={createMemo} style={styles.add} android_ripple={{ color: "#7d7d7d", borderless: true }}>
					<FontAwesomeIcon icon={Icons.faPlus} color="black" size={25} />
				</Pressable>
			</View>
		</View>
	);
}

export default HomeScreen;