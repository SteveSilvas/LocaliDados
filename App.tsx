
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/screens/Home';
import Toolbar from './src/components/UI/Toolbar';

export default function App() {

    return (
        <View style={styles.container}>
            <Toolbar />
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        padding: 0,
        margin: 0
    },
})