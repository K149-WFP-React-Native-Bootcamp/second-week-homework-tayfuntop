import React from "react";
import { FlatList, ScrollView, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import { themes } from "../../themes/palettes";

const List = props => {

    const {
        data, setData, statusDisplay, activeData, completedData
    } = props;

    const changeChecked = (index) => {
        setData(
            data.map((item) => {
                return (
                    {
                        id: item.id,
                        text: item.text,
                        checked: item.id === index ? !item.checked : item.checked
                    }
                )
            })
        )
    };

    const onChangeText = (e, index) => {
        setData(
            data.map((item) => {
                let isChangedText = item.id === index && true;
                return (
                    {
                        id: item.id,
                        text: isChangedText ? e : item.text,
                        checked: item.checked
                    }
                )
            })
        )
    };

    const deletedText = (e, index) => {
        data.splice((index), 1)
        let i = -1;
        setData(
            data.map((item) => {
                i++
                return (
                    {
                        id: i,
                        text: item.text,
                        checked: item.checked,
                    }
                )
            })
        )
    };

    if (statusDisplay === "All") {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.list}>
                                <TouchableOpacity
                                    style={styles.checked}
                                    value={5}
                                    onPress={() => changeChecked(item.id)}>
                                    {
                                        item.checked && <Icon
                                            name="check" size={20} color="#000"
                                        />
                                    }
                                </TouchableOpacity>
                                <View>
                                    <TextInput
                                        onChangeText={(e) => onChangeText(e, item.id)}
                                        value={item.text}
                                        style={[
                                            styles.textInput,
                                            item.checked && {
                                                backgroundColor: themes.listColor,
                                                textDecorationLine: "line-through",
                                            }
                                        ]}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={(e) => deletedText(e, item.id)}
                                >
                                    <Icon
                                        style={styles.close}
                                        name="close"
                                        size={20}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    estimatedItemSize={200}
                />
            </View>
        );
    } else if (statusDisplay === "Active") {
        return (
            <View style={styles.container}>
                <FlatList
                    data={activeData}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.list}>
                                <TouchableOpacity
                                    style={styles.checked}
                                    value={5}
                                    onPress={() => changeChecked(item.id)}>
                                    {
                                        item.checked && <Icon
                                            name="check" size={20} color="#000"
                                        />
                                    }
                                </TouchableOpacity>
                                <View>
                                    <TextInput
                                        onChangeText={(e) => onChangeText(e, item.id)}
                                        value={item.text}
                                        style={[
                                            styles.textInput,
                                            item.checked && {
                                                backgroundColor: themes.listColor,
                                                textDecorationLine: "line-through",
                                            }
                                        ]}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={(e) => deletedText(e, item.id)}
                                >
                                    <Icon
                                        style={styles.close}
                                        name="close"
                                        size={20}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    estimatedItemSize={200}
                />
            </View>
        );
    } else if (statusDisplay === "Completed") {
        return (
            <View style={styles.container}>
                <FlatList
                    data={completedData}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.list}>
                                <TouchableOpacity
                                    style={styles.checked}
                                    value={5}
                                    onPress={() => changeChecked(item.id)}>
                                    {
                                        item.checked && <Icon
                                            name="check" size={20} color="#000"
                                        />
                                    }
                                </TouchableOpacity>
                                <View>
                                    <TextInput
                                        onChangeText={(e) => onChangeText(e, item.id)}
                                        value={item.text}
                                        style={[
                                            styles.textInput,
                                            item.checked && {
                                                backgroundColor: themes.listColor,
                                                textDecorationLine: "line-through",
                                            }
                                        ]}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={(e) => deletedText(e, item.id)}
                                >
                                    <Icon
                                        style={styles.close}
                                        name="close"
                                        size={20}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    estimatedItemSize={200}
                />
            </View>
        );
    }


};

export { List };