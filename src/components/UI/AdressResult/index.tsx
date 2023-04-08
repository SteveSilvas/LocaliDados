import { StyleSheet, KeyboardAvoidingView, Keyboard, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { Adress } from '../../../@Types/Adress';
import ItemResult from '../ItemResult';

interface AdressResultProps {
    isVisible: boolean;
    adress: Adress | null;
    onClose: () => void;
}
const AdressResult: React.FC<AdressResultProps> = ({
    isVisible,
    adress,
    onClose
}) => {


    const onCloseAdressResult = (): void => {
        onClose();
    }

    return isVisible ? (
        <ScrollView style={styles.resultContainer}>
            <View style={styles.resultHeader}>
                <TouchableOpacity
                    onPress={onCloseAdressResult}>
                    <Text
                        style={{
                            marginRight: 10,
                            color: "red",
                            fontWeight: "bold",
                            fontSize: 20
                        }}
                    >X</Text>
                </TouchableOpacity>
            </View>
            <ItemResult label={"Logradouro:"} value={adress?.logradouro} />
            <ItemResult label={"Bairro:"} value={adress?.bairro} />
            <ItemResult label={"Complemento:"} value={adress?.complemento} />
            <ItemResult label={"CEP:"} value={adress?.cep} />
            <ItemResult label={"Cidade:"} value={adress?.localidade} />
            <ItemResult label={"Estado:"} value={adress?.uf} />
            <ItemResult label={"DDD:"} value={adress?.ddd} />
            <ItemResult label={"IBGE:"} value={adress?.ibge} />
            <ItemResult label={"GIA:"} value={adress?.gia} />
            <ItemResult label={"SIAFI:"} value={adress?.siafi} />
        </ScrollView>
    ) : <></>;
}

const styles = StyleSheet.create({
    resultContainer: {
        width: "100%",
        // alignItems: "center",
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderRadius: 6
    },
    resultHeader: {
        backgroundColor: "white",
        width: "100%",
        alignItems: "flex-end"
    }
})

export default AdressResult;