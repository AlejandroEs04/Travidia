import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export default function TripContainer() {
    const backgroundColor = useThemeColor({ light: Colors.light.container, dark: Colors.dark.container }, 'background');
    const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text');
    
    return (
        <View style={[styles.container, {backgroundColor}]}>
            <View style={styles.leftContainer}>
                <Text style={[{ color }, styles.text]}>Departure Date: {new Date(Date.now()).toDateString()}</Text>
                <Text style={[{ color }, styles.text]}>Returned Date: {new Date(Date.now()).toDateString()}</Text>
                <Text style={[{ color }, styles.text]}>Destiny: Tokio, Japón</Text>
            </View>

            <View style={styles.rigthContainer}>
                <Text style={[{ color }, styles.text, styles.textRigth]}>Status: Finished</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 10
    },
    text: {
        fontSize: 15,
        fontWeight: '600'
    },
    textRigth: {
        textAlign: 'right'
    },
    leftContainer: {
        width: '65%',
        borderRightColor: '#737373',
        borderRightWidth: 0.5,
        paddingRight: 5
    },
    rigthContainer: {
        width: '35%',
        paddingLeft: 5
    }
})