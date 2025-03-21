import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import CustomText from '@/components/CustomText'
import { Link } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'
import TripContainer from '@/components/TripContainer'

export default function index() {
    const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');
    
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <CustomText type='title' style={styles.textWhite}>Welcome Estrada</CustomText>
                <CustomText type='subtitle'>Dashboard</CustomText>
            </View>
            
            <ScrollView style={[styles.mainContainer, { backgroundColor }]}>
                <ScrollView horizontal style={styles.nav}>
                    <View><Link style={[styles.linkPrimary, styles.link]} href={'/trip/request'}>Request Trip</Link></View>
                    <View><Link style={[styles.linkGray, styles.link]} href={'/trip/request'}>Report</Link></View>
                    <View><Link style={[styles.linkGray, styles.link]} href={'/trip/trips'}>History</Link></View>
                    <View><Link style={[styles.linkGray, styles.link]} href={'/trip/request'}>Profile</Link></View>
                    <View><Link style={[styles.linkGray, styles.link]} href={'/trip/request'}>Settings</Link></View>
                </ScrollView>

                <View style={styles.content}>
                    <CustomText type='title'>Bussiness Trips</CustomText>

                    <TripContainer />
                    <TripContainer />
                    <TripContainer />
                </View>
                
                <View style={styles.content}>
                    <CustomText type='title'>Expenses Reports</CustomText>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        backgroundColor: Colors.Palette.primary
    },
    textWhite: {
        color: Colors.Palette.white
    },
    bannerContainer: {
        padding: 15,
        paddingTop: 65
    }, 
    mainContainer: {
        paddingHorizontal: 15,
        paddingTop: 20,
        backgroundColor: Colors.light.background,
        height: '100%'
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        width: 'auto',
        gap: 20,
        paddingBottom: 12
    },
    linkPrimary: {
        backgroundColor: Colors.Palette.primary,
        color: '#fff',
    },
    linkGray: {
        backgroundColor: Colors.light.btnGray,
        color: Colors.light.colorDark
    },
    link: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 5,
        
    },
    content: {
        marginTop: 10,
        display: 'flex',
        gap: 10
    }
})