import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';

type customButtonprops = {
    title: string;
    onPress: () => void;
    color?: string;
};

const customButton: React.FC<customButtonprops> = ({ title = "Button", onPress, color = "#2563EB" }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
        width: '80%',
        alignSelf: 'center',
    },
    text: {
        color: '#fff',
    },
});

export default customButton;
