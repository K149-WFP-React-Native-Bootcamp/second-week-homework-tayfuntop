import { StyleSheet } from "react-native";
import { font } from "../../config/font";
import { themes } from "../../themes/palettes";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        fontSize: 64,
    },
    text: {
        fontSize: font.TitleSize,
        fontFamily: font.fontFamily,
        color: themes.black,
        textAlign: "center",
        marginBottom: 15,
        fontWeight: "700",
    }
});

export default styles;