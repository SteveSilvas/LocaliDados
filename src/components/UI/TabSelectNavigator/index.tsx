import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TabOption from "./TabOption";
import Colors from "../../../@Utils/colors";
import { TabSelect } from "../../../@Types/TabSelect";

interface IProps {
    onChangeTab: (tabSelect: string) => void;
}

const TabSelectNavigator: React.FC<IProps> = ({
    onChangeTab
}) => {
    // const [tabSelect, setTabSelect] = useState<TabSelectType>({
    //     label: "Selecione",
    //     value: "",
    // });

    let tabsDatas: TabSelect[] = [{
        label: 'Buscar Endereço',
        value: 'getAdress'
    },
    {
        label: 'Buscar CEP',
        value: 'getZIPCode'
    }];

    const onItemSelectHandler = (tab: TabSelect) => {
        // setTabSelect(tab);
        onChangeTab(tab.value);
    }

    const renderTabs = (): JSX.Element[] => {
        const itemsElements: JSX.Element[] = tabsDatas.map((tab: TabSelect) => {
            return (<TabOption tab={tab} onItemSelect={onItemSelectHandler} />)
        });

        return itemsElements;
    }

    const SelectInput = (
        <View style={styles.container}>
                {renderTabs()}
        </View>
    );


    return SelectInput;
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent :"center",
        backgroundColor: Colors.primary4
    },
});

export default TabSelectNavigator;
