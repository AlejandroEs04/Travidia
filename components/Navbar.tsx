import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <View style={styles.navbarContainer}>
                <Link href={'/trip/trips'}>
                    <MaterialIcons name="airplane-ticket" size={30} color="black" />
                </Link>
                <Link href={'/'}>
                    <MaterialIcons name="home" size={32} color="black" />
                </Link>
                <Link href={'/trip/request'}>
                    <MaterialIcons name="add" size={32} color="black" />
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    navbarContainer: {
        backgroundColor: '#fff', 
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        flexDirection: 'row', 
        gap: 30,
        borderRadius: 20
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})