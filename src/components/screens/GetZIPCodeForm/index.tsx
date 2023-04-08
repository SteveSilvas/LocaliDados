import { StyleSheet, View, Text, TouchableOpacity, Alert, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import FieldForm from './FieldForm';
import GetStates from '../../../Services/GetStates';
import { State } from '../../../@Types/State';
import Select from '../../UI/Select';
import GetZIPCodeService from '../../../Services/GetZIPCodeService';
import { Adress } from '../../../@Types/Adress';
import Colors from "../../../@Utils/colors";
import AdressResult from '../../UI/AdressResult';

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

    const onSearchCep = (): void => {
        if (checkFields()) {
            Keyboard.dismiss();

            const adress: Adress = {
                logradouro: street,
                localidade: city,
                uf: stateSelected?.sigla ?? ""
            };

            GetZIPCodeService(adress)
                .then((res) => {
                    const [result] = res;
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

                    setAdress(adressResult);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    const checkFields = (): boolean => {
        if (city == "") {
            Alert.alert("Preencha a Cidade");
            return false;
        }
        if (street == "") {
            Alert.alert("Preencha a Rua");
            return false;
        }

        if (stateSelected == undefined) {
            Alert.alert("Escolha um Estado");
            return false;
        }
        return true;
    }

    return isVisible ? (
        <View style={styles.root}>
            <Text style={styles.title}>Buscar CEP</Text>
            <View style={styles.form}>
                <FieldForm label="Rua" onChange={changeStreetHandler} />
                <FieldForm label="Cidade" onChange={changeCityHandler} />

                <View style={{ zIndex: 999 }}>
                    <Text style={styles.label}>UF:</Text>
                    <Select data={states} onChange={changeStateSelectedHandler} />
                </View>

                <View style={styles.buttonSection}>
                    <TouchableOpacity
                        style={adress == null ? styles.buttonDisabled : styles.buttonContainer}
                        onPress={onSearchCep}>
                        <Text>Buscar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AdressResult adress={adress} isVisible={showResult} onClose={toggleShowResult} />

        </View>
    ) : null;
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        padding: 10
    },
    form: {
        borderWidth: 1,
        borderColor: Colors.primary0,
        padding: 10
    },
    label: {
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "#c3c3c3",
        borderRadius: 6,
        width: 300,
        padding: 4
    },
    buttonSection: {
        alignItems: "center",
        marginTop: 10
    },
    buttonDisabled: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.primary1,
        padding: 6,
        borderRadius: 6,
        width: 100,
        alignItems: "center"
    },
    buttonContainer: {
        backgroundColor: Colors.primary0,
        padding: 6,
        borderRadius: 6,
        width: 100,
        alignItems: "center"
    },
    buttonText: {
        fontWeight: "bold",
        color: Colors.primary4,
        fontSize: 20
    },
    resultContainer: {
        width: "100%",
        alignItems: "center",
        padding: 100,
        margin: 20,
        borderWidth: 1,
        borderRadius: 6
    },
    resultRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: Colors.primary0,
        backgroundColor: "white",
        paddingHorizontal: 10
    }
})
export default GetZIPCodeForm;