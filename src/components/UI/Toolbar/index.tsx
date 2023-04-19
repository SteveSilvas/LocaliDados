import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import ThemedButton from '../ThemedButton';
import { Theme, themeAtom } from '../../../Context/ThemeContext';
import { getColors } from '../../../@Utils/colors';

const Toolbar = () => {
    const colors = getColors();
    return (
        <>
            <View style={[styles.toolbar, { backgroundColor: colors.background }]}>
                <Text style={[styles.title, { color: colors.font }]}>Locali dados</Text>
            </View>
            <View style={{
                width: 50,
                marginLeft: 10,
                position: 'absolute',
                marginTop: 40,
                alignItems: 'flex-end'
            }}>
                <ThemedButton />
            </View>
        </>

    )
}

export default Toolbar