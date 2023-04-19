import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors, { getColors } from '../../../@Utils/colors';
import { TabSelect } from '../../../@Types/TabSelect';


interface TabOptionProps {
    tab: TabSelect;
    onItemSelect: (tabSelected: TabSelect) => void
}
const TabOption: React.FC<TabOptionProps> = ({
    tab,
    onItemSelect
}) => {
    const colors = getColors();
    const pressMe = (): void => {
        onItemSelect(tab)
    }
    
    return (
        <TouchableOpacity style={{ padding: 10}}
            onPress={pressMe}>
            <Text style={{color:colors.font, fontWeight:"bold", fontSize:20}}>{tab.label}</Text>
        </TouchableOpacity>
    )
}

export default TabOption;