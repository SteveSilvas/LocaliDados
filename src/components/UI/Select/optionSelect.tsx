
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../../../@Utils/colors";
import { State } from "../../../@Types/State";

interface OptionSelectProps {
    state: State;
    onItemSelect: (value: State) => void
}

const OptionSelect: React.FC<OptionSelectProps> = ({
    state,
    onItemSelect
}) => {

    const pressMe = (): void => {
        onItemSelect(state)
    }

    return (
        <TouchableOpacity style={{ zIndex: 1 }}
            onPress={pressMe}>
            <Text style={{
                backgroundColor: Colors.white,
                color: "black", borderBottomWidth: 1,
            }}>
                {state.sigla} - {state.nome}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionSelect;