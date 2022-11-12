import { StyleSheet } from "react-native";
import { W, H } from "../../utils/ui/dimensions";

const styles = StyleSheet.create({
    container: {
        width: W(95),
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginTop: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default styles;