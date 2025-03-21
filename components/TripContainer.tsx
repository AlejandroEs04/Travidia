import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export default function TripContainer() {
    const backgroundColor = useThemeColor({ light: Colors.light.container, dark: Colors.dark.background }, 'background');
    
    return (
        <View style={[styles.container, {backgroundColor}]}>
            <View style={styles.leftContainer}>
                <Text style={[styles.text]}>Departure Date: {new Date(Date.now()).toDateString()}</Text>
                <Text style={[styles.text]}>Returned Date: {new Date(Date.now()).toDateString()}</Text>
            </View>

            <View style={styles.rigthContainer}>
                <Text style={[styles.text, styles.textRigth]}>Status: Finished</Text>
                <Text style={[styles.text, styles.textRigth]}>Destiny: Tokio, Japón</Text>
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
        fontSize: 16,
        fontWeight: '600'
    },
    textRigth: {
        textAlign: 'right'
    },
    leftContainer: {
        width: '65%',
        borderRightColor: '#737373',
        borderRightWidth: 0.5,
        paddingRight: 10
    },
    rigthContainer: {
        width: '35%'
    }
})