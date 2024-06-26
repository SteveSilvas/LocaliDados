import { StyleSheet } from "react-native";
import Colors from "../../../@Utils/colors";


const styles = StyleSheet.create({
    root: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        padding:10,
        fontSize: 20,
        textAlign: "center"
    },
    form:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        padding: 10,
    },
    rowInput: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginBottom:15
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        width: "100%"
    },
    iconContainer: {
        marginLeft: -25,
        justifyContent: "center"
    },
    iconText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonDisabled: {
        backgroundColor: Colors.lightColors.primary3,
        borderWidth: 1,
        borderColor: Colors.lightColors.primary1,
        padding: 6,
        borderRadius: 6,
        width: 100,
        alignItems: "center"
    },
    buttonContainer: {
        backgroundColor: Colors.lightColors.primary0,
        padding: 6,
        borderRadius: 6,
        width: 100,
        alignItems: "center"
    },
    buttonText: {
        fontWeight: "bold",
        color: Colors.lightColors.primary4,
        fontSize:20
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
        borderBottomColor: Colors.lightColors.primary0,
        backgroundColor: "white",
        paddingHorizontal: 10
    }
});

export default styles;