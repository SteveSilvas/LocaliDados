import { View, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../../../Context/ThemeContext';

const ThemedButton = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [theme, setTheme] = useAtom(themeAtom);

    useEffect(() => {
        setTheme(isEnabled ? 'light' : 'dark');
    }, [isEnabled]);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };

    return (
        <View style={{
            height: 20,
            width: 30,
            justifyContent: "center",
        }}>
            <Switch
                trackColor={{ false: 'gray', true: '#c3c3c3' }}
                thumbColor={isEnabled ? 'black' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default ThemedButton;
