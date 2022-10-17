import styles from "./styles";
import { AppContext } from "../../Globals";
import { View, Pressable, Keyboard, TouchableWithoutFeedback, FlatList, TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import Title from "../../components/Title";
import Memo from "../../components/Memo";

const SearchScreen = () => {
	const context = useContext(AppContext);
	const { setScreen } = context;

	const [input, setInput] = useState("");
	const [memos, setMemos] = useState([]);

	useEffect(() => {
		let filteredMemos;
		if (input === "") {
			filteredMemos = context.memos.sort(() => 0.5 - Math.random());
		} else {
			filteredMemos = context.memos.filter(memo => memo.title.toLowerCase().includes(input.toLowerCase()) || memo.content.toLowerCase().includes(input.toLowerCase()));
		}
		setMemos(filteredMemos)
	}, [input]);

	const back = () => {
		setScreen("HomeScreen");
		context.setSelectedMemo({});
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
			<View style={styles.container}>
				<Pressable onPress={back}>
					<View style={styles.back}>
						<FontAwesomeIcon icon={Icons.faArrowLeftLong} color="white" size={20} />
					</View>
				</Pressable>

				<View style={styles.header}>
					<Title style={styles.title} text={"Search Memos"} />
					<TextInput style={styles.input} onChangeText={t => setInput(t)} placeholder="Search" />
				</View>

				<View style={styles.memos}>
					<FlatList
						data={memos}
						renderItem={({ item }) => <Memo content={item.content} title={item.title} date={item.date} colour={item.colour} isPinned={item.isPinned} />}
						showsVerticalScrollIndicator={true}
						keyExtractor={(item, index) => index.toString()}
						decelerationRate="normal"
					/>
				</View>

			</View>
		</TouchableWithoutFeedback >
	);
}

export default SearchScreen;