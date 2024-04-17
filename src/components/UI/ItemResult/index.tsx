import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Colors from '../../../@Utils/colors';

interface ItemResultProps {
    label?: string;
    value?: string;
}

const ItemResult: React.FC<ItemResultProps> = ({ label, value }) => {
    return (
        <View style={styles.resultRow}>
            <Text>{label ?? ""}</Text>
            <Text>{value ?? ""}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: Colors.lightColors.primary0,
        backgroundColor: "white",
        paddingHorizontal: 10
    }
})

export default ItemResult;