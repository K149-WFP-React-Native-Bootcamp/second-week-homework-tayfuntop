import React from "react";
import {View} from "react-native";
import {Main} from "../../components/index";
import styles from "./styles";

const Home = props => {

    return (
        <View style={styles.container}>
            <Main />
        </View>
    );
};

export {Home};