import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const Buttons = props => {

    const {
        data, setData, setStatusDisplay, setActiveData, setCompletedData
    } = props;

    const allButton = () => {
        setStatusDisplay("All");
    }

    const activeButton = () => {
        setActiveData(
            data.filter((item) => item.checked === false)
        )
        setStatusDisplay("Active");
    }

    const completedButton = () => {
        setCompletedData(
            data.filter((item) => item.checked === true)
        )
        setStatusDisplay("Completed");
    }

    const clearCompletedButton = () => {
        let index = -1;
        setData(
            data.filter(item => item.checked === false).map(item => {
                index++
                return (
                    {
                        id: index,
                        text: item.text,
                        checked: item.checked
                    }
                );
            })
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={allButton} style={styles.button} >
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={activeButton} style={styles.button} >
                <Text>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={completedButton} style={styles.button} >
                <Text>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearCompletedButton} style={styles.button} >
                <Text>Clear Completed</Text>
            </TouchableOpacity>
        </View>
    );
};

export { Buttons };