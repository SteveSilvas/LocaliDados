import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import GetAdressService from "../../../Services/GetAdressService";
import { Adress } from '../../../@Types/Adress';
import styles from './styles';
import AdressResult from '../../UI/AdressResult';
import { addZIPMask } from '../../../@Utils/addZipMask';
import colors, { getColors } from '../../../@Utils/colors';
import { getNumbers } from '../../../@Utils/getNumbers';
interface GetAdressProps {
    isVisible: boolean;
}

const GetAdressForm: React.FC<GetAdressProps> = ({ isVisible }) => {
    const [zipCode, setzipCode] = useState<string>("");
    const [adress, setAdress] = useState<Adress | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const colorsMutable = getColors();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });
    }, []);

    useEffect(() => {
        if (keyboardOpen) { setShowResult(false) }
    }, [keyboardOpen]);

    useEffect(() => {
        if (adress) {
            setShowResult(true);
        }
    }, [adress]);

    const changeZIPCode = (text: string): void => {
        setzipCode(addZIPMask(text.slice(0, 9)));
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
            <Text style={[styles.title, { color: colorsMutable.font }]}>Buscar Endereço</Text>
            <View style={styles.form}>
                <View style={styles.rowInput}>
                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: colors.lightColors.primary0,
                                color: colorsMutable.font
                            }
                        ]}
                        placeholderTextColor={colorsMutable.font}
                        onChangeText={changeZIPCode}
                        keyboardType='numeric'
                        placeholder='DIGITE O CEP'
                        value={zipCode}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={clearInput}>
                        <Text style={[styles.iconText, {color: colorsMutable.font}]}>X</Text>
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