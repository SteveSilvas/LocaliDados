import { StyleSheet, View, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors, { getColors } from '../../../@Utils/colors';
interface FieldProps {
    label: string,
    onChange: (value: string) => void
}

const FieldForm: React.FC<FieldProps> = ({ label, onChange }) => {
    const colorsMutables = getColors();

    const onChangeHandler = (value: string): void => {
        onChange(value);
    }

    return (
        <View style={styles.field}>
            <Text style={[styles.label, {color: colorsMutables.font}]}>{label}:</Text>
            <TextInput
                style={[styles.input, {color:colorsMutables.font}]}
                keyboardType="default"
                placeholder={label}
                onChangeText={onChangeHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    field: {

    },
    label: {
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "#c3c3c3",
        borderRadius: 6,
        width: 300,
        padding: 4
    }
});

export default FieldForm;