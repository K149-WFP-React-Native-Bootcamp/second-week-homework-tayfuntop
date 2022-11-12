import { StyleSheet } from "react-native";
import { themes } from "../../../themes/palettes";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    button: {
        marginLeft: 4,
        minWidth: 35,
        padding: 3,
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.white,
    }
});

export default styles;