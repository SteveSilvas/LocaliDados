
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/screens/Home';
import Toolbar from './src/components/UI/Toolbar';
import { ThemeContext } from './src/Context/ThemeContext';


export default function App() {
    const {theme, setTheme} = useContext(ThemeContext);
    
    return (
        <View style={styles.container}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Toolbar />
                <Home />
            </ThemeContext.Provider>
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