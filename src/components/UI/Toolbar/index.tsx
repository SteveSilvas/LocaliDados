import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ThemedButton from '../ThemedButton'

const Toolbar = () => {
    return (
        <View style={styles.toolbar}>
            <ThemedButton />
        </View>
    )
}

export default Toolbar