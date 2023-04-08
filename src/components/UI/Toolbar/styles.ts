import { StyleSheet } from "react-native";
import Colors from "../../../@Utils/colors";

export const styles = StyleSheet.create({
    toolbar:{
        width: "100%",
        height: "10%",
        backgroundColor: Colors.primary4,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color: Colors.white,
        fontSize:30,
    }
})