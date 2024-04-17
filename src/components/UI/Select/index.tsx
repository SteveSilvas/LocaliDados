import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Colors, { getColors } from '../../../@Utils/colors';
import { State } from '../../../@Types/State';
import OptionSelect from './optionSelect';

interface SelectProps {
    data?: State[];
    onChange: (dataSelected: State) => void;
}

const Select: React.FC<SelectProps> = ({ data, onChange }) => {
    const [selectedItem, setSelectedItem] = useState<State | null>(null);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const colorsM = getColors();
    const handleToggleCollapse = (): void => {
        setIsCollapsed(!isCollapsed);
    };

    const handleItemSelect = (item: State): void => {
        setSelectedItem(item);
        setIsCollapsed(true);
        onChange(item);
    };

    const renderSelectedValue = (): JSX.Element | null => {
        if (selectedItem) {
            return <Text style={{
                color: colorsM.font,
                borderWidth: 1,
                borderColor: Colors.lightColors.primary0,
                borderRadius: 6,
                padding: 10,
                width: 300
            }}>{selectedItem.nome}</Text>;
        }
        return null;
    };

    const renderList = (): JSX.Element | null => {
        if (!isCollapsed && data) {
            const elements: JSX.Element[] = data.map((state: State) => {
                return (
                    <OptionSelect key={state.id} state={state} onItemSelect={handleItemSelect} />
                );
            });
            return <View
                style={{
                    height: 150,
                    borderWidth: 1,
                    borderColor: Colors.lightColors.primary0,
                    borderRadius: 6,
                    marginTop: 5,
                    zIndex: 2
                }}>
                <ScrollView>
                    {elements}
                </ScrollView>
            </View>;
        }
        return null;
    };

    return (
        <View>
            <TouchableOpacity onPress={handleToggleCollapse}>
                {renderSelectedValue() ||
                    <Text style={{
                        color: colorsM.font,
                        borderWidth: 1,
                        borderColor: Colors.lightColors.primary0,
                        borderRadius: 6,
                        padding: 10,
                        width: 300
                    }}>Selecione...</Text>}
            </TouchableOpacity>
            {renderList()}
        </View>
    );
};

export default Select;
