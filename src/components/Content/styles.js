import { StyleSheet } from "react-native";
import { W, H, w, h } from "../../utils/ui/dimensions";
import { themes } from "../../themes/palettes";

const styles = StyleSheet.create({
    container: {
        width: W(92),
        height: w > h ? H(47) : H(68),
        marginTop: 15,
    },
    list: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },
    textInput: {
        backgroundColor: themes.white,
        height: 30,
        width: W(73),
        padding: 5,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    close: {
        marginRight: W(3),
        marginLeft: W(3),
    },
    checked: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: W(2),
        marginLeft: W(2)
    }
});

export default styles;