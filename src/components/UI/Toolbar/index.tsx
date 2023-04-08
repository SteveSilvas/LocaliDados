import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ThemedButton from '../ThemedButton'

const Toolbar = () => {
    return (
        <View style={styles.toolbar}>
            {/* <ThemedButton /> */}
            <Text style={styles.title}>Locali dados</Text>
        </View>
    )
}

export default Toolbar