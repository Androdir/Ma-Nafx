import styles from "./styles";
import { AppContext, colours } from "../../Globals";
import { View, Pressable, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Modal, Alert } from "react-native";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import * as Icons from "@fortawesome/free-solid-svg-icons"
import Title from "../../components/Title";


const Colour = ({ colour, setColour }) => {
	return (
		<Pressable style={[styles.colour, { backgroundColor: colour }]} onPress={() => { setColour(colour) }}>
			<FontAwesomeIcon icon={Icons.faCircle} size={30} color={colour} />
		</Pressable>
	);
}

const MemoScreen = () => {
	const context = useContext(AppContext);

	const isEditing = Object.entries(context.selectedMemo).length !== 0;

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [colorModalVisible, setColorModalVisible] = useState(false);
	const [colour, setColour] = useState("white");
	const [isPinned, setIsPinned] = useState(false);

	useEffect(() => {
		if (isEditing) {
			setTitle(context.selectedMemo.title);
			setContent(context.selectedMemo.content);
			setIsPinned(context.selectedMemo.isPinned);
			setColour(context.selectedMemo.colour);
		}
	}, []);

	const del = async () => {
		Alert.alert("Delete Memo", "Are you sure you want to delete this memo? This cannot be undone.", [
			{
				text: "Cancel",
			},
			{
				text: "Delete",
				onPress: async () => {
					await AsyncStorage.setItem("@memos", JSON.stringify(context.memos.filter(memo => JSON.stringify(memo) !== JSON.stringify(context.selectedMemo))));
					context.setScreen("HomeScreen");
				}
			}
		]);
	}

	const done = async () => {
		if (content === "") {
			alert("Please fill in the content field.");
			return;
		}

		try {
			if (isEditing) {
				const date = context.selectedMemo.date;
				let edited = false;
				const newMemos = context.memos.map(memo => {
					const bool = JSON.stringify(memo) === JSON.stringify(context.selectedMemo)
					if (!edited && bool) {
						edited = true;
						return { title: title !== "" ? title : content.slice(0, 15), content, date, colour, isPinned };
					}
					return memo;
				});
				context.setMemos(newMemos);
				await AsyncStorage.setItem("@memos", JSON.stringify(newMemos));
				context.setSelectedMemo({});
				context.setScreen("HomeScreen");
				return;
			}

			const memos = await AsyncStorage.getItem("@memos");
			const parsedMemos = JSON.parse(memos) || [];
			const newMemo = { title: title !== "" ? title : content.slice(0, 15), content, date: new Date().getTime(), colour, isPinned };
			const newMemos = [...parsedMemos, newMemo];
			await AsyncStorage.setItem("@memos", JSON.stringify(newMemos));
			context.setScreen("HomeScreen");
		} catch (e) {
			alert(e);
		}
	}

	const back = () => {
		context.setScreen("HomeScreen");
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
				<Modal
					animationType="fade"
					transparent={true}
					visible={colorModalVisible}
					onRequestClose={() => {
						setColorModalVisible(!colorModalVisible);
					}}
				>
					<TouchableWithoutFeedback onPress={() => setColorModalVisible(false)} touchSoundDisabled={true}>
						<View style={styles.modalContainer}>
							<View style={styles.modal}>
								<Title style={styles.modalTitle} text="Select a Colour" />
								<View style={styles.modalColours}>
									{colours.map((colour, index) => <Colour key={index} colour={colour} setColour={setColour} />)}
								</View>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</Modal>

				<View style={styles.header}>
					<Title style={styles.title} text={isEditing ? "Edit Memo" : "Create Memo"} />
				</View>

				<KeyboardAvoidingView style={styles.inputs} behavior="height" keyboardVerticalOffset={100}>
					<TextInput
						multiline={false}
						placeholder="Enter title"
						style={styles.input}
						onChangeText={text => setTitle(text)}
						value={title}
						autoCorrect={true}
					/>
					<TextInput
						multiline={true}
						placeholder="Enter content"
						style={[styles.input, styles.contentInput]}
						onChangeText={text => setContent(text)}
						value={content}
						autoCorrect={true}
					/>
				</KeyboardAvoidingView>

				<View style={styles.icons}>
					<View style={styles.iconContainer}>
						<Pressable onPress={done} style={styles.icon} android_ripple={{ color: "#7d7d7d", borderless: true }}>
							<FontAwesomeIcon icon={Icons.faCheck} color="black" size={25} />
						</Pressable>
					</View>
					<View style={styles.iconContainer}>
						<Pressable onPress={() => setColorModalVisible(!colorModalVisible)} style={[styles.icon, { "backgroundColor": colour }]}>
							<FontAwesomeIcon icon={Icons.faEyedropper} color={"black"} size={25} />
						</Pressable>
					</View>
					<View style={styles.iconContainer}>
						<Pressable onPress={() => setIsPinned(!isPinned)} style={styles.icon} android_ripple={{ color: "#7d7d7d", borderless: true }}>
							<FontAwesomeIcon icon={Icons.faMapPin} color={isPinned ? "black" : "lightgray"} size={25} />
						</Pressable>
					</View>
					{isEditing &&
						<View style={styles.iconContainer}>
							<Pressable onPress={del} style={styles.icon} android_ripple={{ color: "#7d7d7d", borderless: true }}>
								<FontAwesomeIcon icon={Icons.faTrashAlt} color="red" size={25} />
							</Pressable>
						</View>}
				</View>
			</View>
		</TouchableWithoutFeedback >
	);
}

export default MemoScreen;