import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Text, View } from 'react-native';
import { Adress } from '../../../@Types/Adress';
import { State } from '../../../@Types/State';
import { getColors } from "../../../@Utils/colors";
import GetStates from '../../../Services/GetStates';
import GetZIPCodeService from '../../../Services/GetZIPCodeService';
import AdressResult from '../../UI/AdressResult';
import Button from '../../UI/Button';
import Select from '../../UI/Select';
import FieldForm from './FieldForm';
import styles from "./styles";
interface GetZIPCodeProps {
    isVisible: boolean
}

const GetZIPCodeForm: React.FC<GetZIPCodeProps> = ({ isVisible }) => {
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [stateSelected, setStateSelect] = useState<State | undefined>(undefined)
    const [states, setStates] = useState<State[]>([]);
    const [adress, setAdress] = useState<Adress | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const colorsMutables = getColors();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });
    }, []);

    useEffect(() => {
        GetStates()
            .then((result: State[]) => {
                setStates(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        if (keyboardOpen) { setShowResult(false) }
    }, [keyboardOpen]);


    useEffect(() => {
        console.warn('mudou o show result para', showResult)
        if (adress) {
            setShowResult(true);
        }
    }, [adress]);

    const changeStreetHandler = (value: string): void => {
        setStreet(value);
    }

    const changeCityHandler = (value: string): void => {
        setCity(value);
    }

    const changeStateSelectedHandler = (value: State): void => {
        setStateSelect(value);
    }

    const toggleShowResult = (): void => {
        setShowResult(!showResult);
    }

    const onSearchCep = async () => {
        if (!checkFields()) return;

        Keyboard.dismiss();

        const adressResult:Adress | null = await GetZIPCodeService(buildAdress());
        // const adressResult: Adress = buildAdressResult(result)

        setAdress(adressResult);
        console.error(adress)
    }

    const checkFields = (): boolean => {
        if (street == "") {
            Alert.alert("Preencha a Rua");
            return false;
        }

        if (city == "") {
            Alert.alert("Preencha a Cidade");
            return false;
        }

        if (stateSelected == undefined) {
            Alert.alert("Escolha um Estado");
            return false;
        }
        return true;
    }

    const buildAdress = (): Adress => {
        let adress: Adress = {
            logradouro: street,
            localidade: city,
            uf: stateSelected?.sigla ?? ""
        };
        console.warn(adress)
        return adress;
    }

    const buildAdressResult = (result: any): Adress => {
        const adressResult: Adress = {
            logradouro: result.logradouro,
            complemento: result.complemento,
            bairro: result.bairro,
            localidade: result.localidade,
            cep: result.cep,
            uf: result.uf,
            ddd: result.ddd,
            gia: result.gia,
            ibge: result.ibge
        };
        return adressResult;
    }

    return isVisible ? (
        <View style={[styles.root, { backgroundColor: colorsMutables.background }]}>
            <Text style={[styles.title, { color: colorsMutables.font }]}>Buscar CEP</Text>
            <View style={styles.form}>
                <FieldForm label="Rua" onChange={changeStreetHandler} />
                <FieldForm label="Cidade" onChange={changeCityHandler} />

                <View style={{ zIndex: 999, height: "55%" }}>
                    <Text style={[styles.label, { color: colorsMutables.font }]}>UF:</Text>
                    <Select data={states} onChange={changeStateSelectedHandler} />
                </View>

                <View style={styles.buttonSection}>
                    <Button
                        text="Buscar"
                        onClick={onSearchCep}
                        disabled={false}
                    />
                </View>
            </View>
            <AdressResult adress={adress} isVisible={showResult} onClose={toggleShowResult} />

        </View>
    ) : null;
}

export default GetZIPCodeForm;