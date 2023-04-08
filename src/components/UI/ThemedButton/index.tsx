import { View, Text, Switch } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../../Context/ThemeContext';

const ThemedButton = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        setTheme(isEnabled ? 'light' : 'dark');
        console.log('toggle ' + theme);
    }, [isEnabled]);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        console.log('isEnabled:', isEnabled);
    };

    return (
        <View>
            <Text style={{ color: theme === 'light' ? 'white' : 'black' }}>ThemedButton</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default ThemedButton;
