import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Input = props => {

    const { inputText, data, setData, setInputText } = props;

    const onPressAdd = async () => {
        inputText !== "" &&
            data.push(
                {
                    id: data.length,
                    text: inputText,
                    checked: false
                }
            );
        setData(data);
        setInputText("");
        await AsyncStorage.setItem("data", JSON.stringify(data));
    }

    return (
        <View style={styles.container}>
            <TextInput
                onSubmitEditing={onPressAdd}
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
            />
        </View>
    );
};

export { Input };

