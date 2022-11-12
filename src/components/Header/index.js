import React from "react";
import { View } from "react-native";
import { AddButton } from "./Button";
import { ChevronDown } from "./ChevronDown/index";
import { Input } from "./Input/index";
import styles from "./styles";

const Header = props => {

    const { setData, data, inputText, setInputText } = props;

    return (
        <View style={styles.container}>
            <ChevronDown
                setData={setData}
                data={data}
            />
            <Input
                inputText={inputText}
                setInputText={setInputText}
                setData={setData}
                data={data}
            />
            <AddButton
                setData={setData}
                inputText={inputText}
                setInputText={setInputText}
                data={data}
            />
        </View>
    );
};

export { Header };