import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        margin: 10,
    },
});

export default styles;
