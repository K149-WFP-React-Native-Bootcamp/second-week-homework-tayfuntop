import { StyleSheet } from "react-native";
import { themes } from "../../../themes/palettes";

const styles = StyleSheet.create({
    button: {
        marginLeft: 10,
        width: 45,
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.white,
    },
});

export default styles;