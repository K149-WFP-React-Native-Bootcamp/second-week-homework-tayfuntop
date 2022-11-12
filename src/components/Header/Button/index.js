import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { } from "../Input/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddButton = props => {

    const { inputText, setInputText, data, setData } = props;

    const onPressAdd = async () => {
        inputText !== "" &&
            data.push(
                {
                    id: data.length,
                    text: inputText,
                    checked: false
                }
            );
        setData(props.data);
        setInputText("");
        await AsyncStorage.setItem("data", JSON.stringify(data));
    };

    return (
        <TouchableOpacity style={styles.button} onPress={onPressAdd}>
            <Text>Add</Text>
        </TouchableOpacity>
    );
};

export { AddButton };