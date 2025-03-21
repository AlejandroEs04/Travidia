import { View, StyleSheet, ScrollView, Image } from 'react-native'
import CustomText from '@/components/CustomText'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import TripContainer from '@/components/TripContainer';

export default function trips() {
    const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');
    
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <View>
                    <CustomText type='title' style={styles.textWhite}>Raphael Estrada</CustomText>
                    <CustomText type='subtitle'>My Trips</CustomText>
                </View>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{
                            uri: `https://res.cloudinary.com/dmap6p5wl/image/upload/v1742589145/trgxih6apxesr1htz6q2.jpg`
                        }} 
                    />
                </View>
            </View>
                    
            <ScrollView style={[styles.mainContainer, { backgroundColor }]}>
                <View style={styles.content}>
                    <CustomText type='title'>Last Trips</CustomText>

                    <TripContainer />
                    <TripContainer />
                    <TripContainer />
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
        paddingTop: 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    mainContainer: {
        paddingHorizontal: 15,
        paddingTop: 20,
        backgroundColor: Colors.light.background,
        height: '100%'
    },
    content: {
        marginTop: 10,
        display: 'flex',
        gap: 10
    },
    imageContainer: {
        borderRadius: 60
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
})