import { View } from 'react-native'
import React, { useState } from 'react';
import GetAdressForm from '../GetAdressForm';
import GetZIPCodeForm from '../GetZIPCodeForm';
import Colors from '../../../@Utils/colors';
import TabSelectNavigator from '../../UI/TabSelectNavigator';

const Home = () => {
    const [tabVisible, setabVisible] = useState<string>('getAdress');

    const onChangeTabHandler = (tab: string): void => {
        setabVisible(tab);
    }

    return (
        <View style={{flex:1, flexDirection:"column-reverse", justifyContent:"space-between", backgroundColor: Colors.primary0}}>
            <View style={{backgroundColor:"white"}}>
                <TabSelectNavigator onChangeTab={onChangeTabHandler} />
            </View>
            <View style={{backgroundColor:"white", flex:1, borderWidth:1, borderColor:Colors.primary0, borderRadius:6,padding:10, margin:10}}>
                <GetAdressForm isVisible={tabVisible == 'getAdress'} />
                <GetZIPCodeForm isVisible={tabVisible == 'getZIPCode'} />
            </View>

        </View>
    )
}

export default Home