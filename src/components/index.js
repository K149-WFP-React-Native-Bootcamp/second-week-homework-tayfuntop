import React, { useState, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Title } from "./Title/index";
import { Header } from "./Header/index";
import { List } from "./Content/index";
import { Footer } from "./Footer/index";
import styles from "./styles";
import PropTypes from "prop-types";

let dontTouch = 0;  //
const Main = props => {

    const [data, setData] = useState([]);
    const [completedData, setCompletedData] = useState(null);
    const [activeData, setActiveData] = useState(null);
    const [inputText, setInputText] = useState("");
    const [statusDisplay, setStatusDisplay] = useState("All");

    const requestData = async () => {
        let dataStorage = await AsyncStorage.getItem("data");
        if (dataStorage !== "") {
            setData(JSON.parse(dataStorage));
        };
    };

    const postData = async () => {
        dontTouch++
        dontTouch !== 1 && await AsyncStorage.setItem("data", JSON.stringify(data));
    };

    useEffect(() => {
        postData();
        setActiveData(data.filter(item => item.checked === false));
        setCompletedData(data.filter(item => item.checked === true));
    }, [data]);

    useEffect(() => {
        requestData();
    }, []);

    return (
        <View style={styles.main}>
            <Title />
            <Header
                inputText={inputText}
                setInputText={setInputText}
                setData={setData}
                data={data}
            />
            <List
                data={data}
                activeData={activeData}
                completedData={completedData}
                setData={setData}
                setActiveData={setActiveData}
                setCompletedData={setCompletedData}
                statusDisplay={statusDisplay}
            />
            <Footer
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

Main.propTypes = {
    data: PropTypes.object,
    activeData: PropTypes.object,
    statusDisplay: PropTypes.string,
    inputText: PropTypes.string,
    completedData: PropTypes.object,
    activeData: PropTypes.object,
};

export { Main };