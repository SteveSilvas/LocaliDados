import { View } from 'react-native'
import React, { useState } from 'react';
import GetAdressForm from '../GetAdressForm';
import GetZIPCodeForm from '../GetZIPCodeForm';
import Colors from '../../../@Utils/colors';
import TabSelectNavigator from '../../UI/TabSelectNavigator';

const Home = () => {
    const [tabVisible, setabVisible] = useState<string>('getAdress');

    const onChangeTabHandler = (tab: string): void => {
        console.log(tab)
        setabVisible(tab);
    }

    return (
        <View style={{flex:1, flexDirection:"column-reverse", justifyContent:"space-between", backgroundColor: Colors.primary0}}>
            <View style={{height: 70}}>
                <TabSelectNavigator onChangeTab={onChangeTabHandler} />
            </View>
            <View style={{backgroundColor:"white", flex:1, borderWidth:1, borderRadius:6,padding:10, margin:10}}>
                <GetAdressForm isVisible={tabVisible == 'getAdress'} />
                <GetZIPCodeForm isVisible={tabVisible == 'getZIPCode'} />
            </View>

        </View>
    )
}

export default Home