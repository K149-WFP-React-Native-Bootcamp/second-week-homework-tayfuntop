import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const LeftItem = props => {

    const { data } = props;

    return (
        <View>
            <Text style={styles.info}>
                Left ({data.filter(item => item.checked === false).length})
            </Text>
        </View>
    );
};

export { LeftItem };