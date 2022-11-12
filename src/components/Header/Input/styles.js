import { StyleSheet } from "react-native";
import { W, H } from "../../../utils/ui/dimensions"
import { themes } from "../../../themes/palettes";

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        height: 30,
        width: W(70),

        padding: 5,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: themes.white,
    },
});

export default styles;