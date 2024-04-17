import { StyleSheet } from "react-native";
import colors from "../../../@Utils/colors";

const styles = StyleSheet.create({
    root: {
        // backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        padding: 10
    },
    form: {
        borderWidth: 1,
        borderColor: colors.lightColors.primary0,
        padding: 10
    },
    label: {
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: colors.lightColors.primary0,
        borderRadius: 6,
        width: 300,
        padding: 4
    },
    buttonSection: {
        alignItems: "center",
        marginTop: 10
    },
    resultContainer: {
        width: "100%",
        alignItems: "center",
        padding: 100,
        margin: 20,
        borderWidth: 1,
        borderRadius: 6
    },
    resultRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: colors.lightColors.primary0,
        backgroundColor: "white",
        paddingHorizontal: 10
    }
});

export default styles;