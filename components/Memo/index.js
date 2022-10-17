import { View, Text, Pressable } from "react-native";
import { useContext } from "react";
import { AppContext, formatTime } from "../../Globals";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Memo = props => {
	const context = useContext(AppContext);
	const { title, content, date, colour, isPinned } = props;
	let slicedContent = content.replace(/\s{2,}/g, " ").trim().slice(0, 30);
	if (slicedContent.length < content.length) {
		slicedContent += "...";
	}
	let slicedTitle = title.replace(/\s{2,}/g, " ").trim().slice(0, 30);
	if (slicedTitle.length < title.length) {
		slicedTitle += "...";
	}

	const editMemo = () => {
		context.setScreen("MemoScreen");
		context.setSelectedMemo({ title, content, date, colour, isPinned });
	}

	const rgbVals = colour.replace(/[^\d,]/g, "").split(",").map(val => parseInt(val));
	const hasDarkBackground = rgbVals[0] + rgbVals[1] + rgbVals[2] < 250;

	return (
		<View style={[styles.container, { "backgroundColor": colour }]}>
			<Pressable
				onPress={editMemo}
				style={styles.pressable}
				android_ripple={{ color: "#7d7d7d", borderless: true }}>
				<View style={styles.row}>
					<Text style={[styles.title, { "color": hasDarkBackground ? "white" : "black" }]}>{slicedTitle}</Text>
					{isPinned && <FontAwesomeIcon icon={Icons.faMapPin} color={hasDarkBackground ? "white" : "black"} size={20} />}
				</View>
				<View style={styles.row}>
					<Text style={[styles.content, { "color": hasDarkBackground ? "#e9e9e9" : "#1a1a1a" }]}>{slicedContent}</Text>
					<Text style={[styles.date, { "color": hasDarkBackground ? "#e9e9e9" : "#1a1a1a" }]}>{formatTime(date)}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default Memo;