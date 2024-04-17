import React, { useState } from 'react';
import { View } from 'react-native';
import Colors, { getColors } from '../../../@Utils/colors';
import TabSelectNavigator from '../../UI/TabSelectNavigator';
import GetAdressForm from '../GetAdressForm';
import GetZIPCodeForm from '../GetZIPCodeForm';
import styles from './styles';

const Home = () => {
    const [tabVisible, setabVisible] = useState<string>('getAdress');
    const colors = getColors();

    const onChangeTabHandler = (tab: string): void => {
        setabVisible(tab);
    }

    return (
        <View style={[styles.root, { backgroundColor: colors.background }]}>
            <View style={{ backgroundColor: colors.primary2 }}>
                <TabSelectNavigator onChangeTab={onChangeTabHandler} />
            </View>
            <View style={[styles.content,
                {
                    backgroundColor: colors.background,
                    borderColor: Colors.lightColors.primary0
                }
            ]}>
                <GetAdressForm isVisible={tabVisible == 'getAdress'} />
                <GetZIPCodeForm isVisible={tabVisible == 'getZIPCode'} />
            </View>

        </View>
    )
}

export default Home