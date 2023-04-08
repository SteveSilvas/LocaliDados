import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import GetAdressService from "../../../Services/GetAdressService";
import { Adress } from '../../../@Types/Adress';
import styles from './styles';
import AdressResult from '../../UI/AdressResult';

interface GetAdressProps {
    isVisible: boolean;
}

const GetAdressForm: React.FC<GetAdressProps> = ({ isVisible }) => {

    const [zipCode, setzipCode] = useState<string>("");
    const [adress, setAdress] = useState<Adress | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });
    },[]);

    useEffect(()=>{
        if(keyboardOpen){setShowResult(false)}
    },[keyboardOpen]);

    const changeZIPCode = (text: string): void => {
        setzipCode(addZIPMask(text.slice(0, 9)));
    }

    useEffect(() => {
        if (adress) {
            setShowResult(true);
        }
    }, [adress]);

    const addZIPMask = (text: string): string => {
        let textClean: string = getNumbers(text);
        let leftSide: string = textClean.slice(0, 5);
        let rightSize: string = textClean.slice(5, 8);

        return `${leftSide}-${rightSize}`;
    }

    const getNumbers = (txt: string): string => {
        let numbers = txt.replace(/[^\d]/g, '');

        return numbers;
    }
    const clearInput = (): void => {
        setzipCode("");
    }

    const onSearchAdress = (): void => {
        if (zipCode.length != 9) return;
        Keyboard.dismiss();
        GetAdressService(getNumbers(zipCode))
            .then((result) => {
                setAdress(result)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const toggleShowResult = (): void => {
        setShowResult(!showResult);
    }

    return isVisible ? (
        <View style={styles.root}>
            <Text style={styles.title}>Buscar Endereço</Text>
            <View style={styles.form}>
                <View style={styles.rowInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={changeZIPCode}
                        keyboardType='numeric'
                        placeholder='DIGITE O CEP'
                        value={zipCode}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={clearInput}>
                        <Text style={styles.iconText}>X</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={zipCode.length != 9 ? styles.buttonDisabled : styles.buttonContainer}
                    onPress={onSearchAdress}
                    disabled={zipCode.length != 9}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>

            <AdressResult adress={adress} isVisible={showResult} onClose={toggleShowResult} />
        </View>
    ) : null;
}

export default GetAdressForm;