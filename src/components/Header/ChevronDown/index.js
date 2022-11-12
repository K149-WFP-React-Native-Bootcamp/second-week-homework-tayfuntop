import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const ChevronDown = props => {

    const { data, setData } = props;

    const allChecked = () => {
        setData(data.map((item) => {
            let isAllChecked = data.every(item => item.checked === true)
            return (
                {
                    id: item.id,
                    text: item.text,
                    checked: isAllChecked ?
                        false : true,
                }
            );
        }));
    };

    return (
        <TouchableOpacity onPress={allChecked}>
            <Icon
                style={styles.chevronDown}
                name="chevron-down"
                size={20}
                color="#000"
            />
        </TouchableOpacity>
    );
};

export { ChevronDown };