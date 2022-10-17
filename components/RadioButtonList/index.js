import styles from "./styles";
import { View, Pressable, Text } from "react-native";
import { createContext, useContext, useState } from "react";


const RadioButtonContext = createContext()

const RadioButton = ({ label, onChange }) => {
	const context = useContext(RadioButtonContext);

	const callback = () => {
		onChange(label);
		context.setSelected(label);
	}

	return (
		<Pressable onPress={callback} style={styles.buttonContainer}>
			<View style={[styles.radioButton, context.selected === label ? styles.radioButtonChecked : {}]} />
			<Text style={styles.label}>{label}</Text>
		</Pressable>
	);
};

const RadioButtonList = ({ title, values, selectedValue, onChange }) => {
	const [selected, setSelected] = useState(selectedValue);

	return (
		<RadioButtonContext.Provider value={{ selected, setSelected }}>
			<View style={styles.container}>
				<View style={styles.inner}>
					<Text style={styles.title}>{title}</Text>
					{values.map((value) => (
						<RadioButton
							key={value}
							label={value}
							onChange={onChange}
						/>
					))}
				</View>
			</View>
		</RadioButtonContext.Provider>
	);
}

export default RadioButtonList;