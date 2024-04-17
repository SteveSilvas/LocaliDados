import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import colors, { getColors } from '../../../@Utils/colors';

export interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled: boolean;
}
const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    disabled
}) => {

    const colorsMutables = getColors();

    const buttonStyles = StyleSheet.create({
        buttonEnabled: {
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colorsMutables.primary1,
            width: "100%",
            padding: 6,
            borderWidth:1,
            borderColor: colors.lightColors.primary1
        },
        buttonDisabled: {
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colorsMutables.primary0,
            width: "100%",
            padding: 6,
            borderWidth:1,
            borderColor: colorsMutables.primary4
        }
    });

    const onPressHandler = ():void =>{
        onClick();
    }

    return (
        <TouchableOpacity
            style={disabled
                ?
                    buttonStyles.buttonDisabled
                :
                    buttonStyles.buttonEnabled
                }
            onPress={onPressHandler}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, {color: colorsMutables.font}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        borderRadius: 6,
        textAlign: "center"
    },
})

export default Button;