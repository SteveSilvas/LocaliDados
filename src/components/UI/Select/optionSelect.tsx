
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Colors, { getColors } from "../../../@Utils/colors";
import { State } from "../../../@Types/State";
interface OptionSelectProps {
    state: State;
    onItemSelect: (value: State) => void
}

const OptionSelect: React.FC<OptionSelectProps> = ({
    state,
    onItemSelect
}) => {
    const colorsM = getColors();
    const pressMe = (): void => {
        onItemSelect(state)
    }

    return (
        <TouchableOpacity style={{ zIndex: 1,padding:5, borderWidth: 1, borderColor:Colors.lightColors.primary0 }}
            onPress={pressMe}>
            <Text style={{
                backgroundColor: colorsM.background,
                color: colorsM.font, 
            }}>
                {state.sigla} - {state.nome}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionSelect;