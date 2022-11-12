import React from "react";
import { View } from "react-native";
import { Buttons } from "./Button/index";
import { LeftItem } from ".//LeftItem/index";
import styles from "./styles";

const Footer = props => {

    const
        {
            setData, data, activeData, completedData,
            setActiveData, setCompletedData, setStatusDisplay
        } = props;

    return (
        <View style={styles.container} >
            <LeftItem data={data} />
            <Buttons
                data={data}
                activeData={activeData}
                completedData={completedData}
                setData={setData}
                setActiveData={setActiveData}
                setCompletedData={setCompletedData}
                setStatusDisplay={setStatusDisplay}
            />
        </View>
    );
};

export { Footer };