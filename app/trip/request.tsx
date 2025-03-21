import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import CustomText from '@/components/CustomText'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { TripRequest } from '@/types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useThemeColor } from '@/hooks/useThemeColor'

export default function request() {
    const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');
    const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text');
    const [tripRequest, setTripRequest] = useState<TripRequest>({
        departureDate: new Date(Date.now()), 
        returnDate: new Date(Date.now()), 
        origin: '', 
        destiny: '', 
        purpose: ''
    });
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [name, setName] = useState('');

    const router = useRouter()

    const showPicker = (type: string) => {
        setName(type)
        setIsPickerShow(true);
    };
    
    const onChangeDate = (event: DateTimePickerEvent, value?: Date) => {
        setTripRequest({
            ...tripRequest, 
            [name]: value
        })

        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    const onChange = (value: string, name: string) => {
        setTripRequest({
            ...tripRequest, 
            [name]: value
        })
    }

    return (
        <View style={styles.main}>
            <View style={styles.banner}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={20} color="white" />
                    <Text style={{ color: '#fff' }}>Back</Text>
                </TouchableOpacity>

                <CustomText type='title' style={{ color: '#fff' }}>Request Trip</CustomText>
                <CustomText type='subtitle' style={{ fontSize: 16 }}>Fill the form for request a bussiness trip</CustomText>
            </View>
            
            <View style={[styles.container, styles.form, { backgroundColor }]}>
                <View>
                    <Text style={[styles.label, {color}]}>Origin</Text>
                    <TextInput 
                        value={tripRequest.origin}
                        style={styles.input} 
                        placeholder='Ej. Monterrey' 
                        onChangeText={text => onChange(text, 'origin')}
                    />
                </View>

                <View>
                    <Text style={[styles.label, {color}]}>Destiny</Text>
                    <TextInput 
                        value={tripRequest.destiny}
                        style={styles.input} 
                        placeholder='Ej. Japón' 
                        onChangeText={text => onChange(text, 'destiny')}
                    />
                </View>

                <View>
                    <Text style={[styles.label, {color}]}>Departure Date</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Departure Date' 
                        value={tripRequest.departureDate.toDateString()} 
                        onPress={() => showPicker('departureDate')} 
                    />
                </View>
                
                <View>
                    <Text style={[styles.label, {color}]}>Returned Date</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Returned Date' 
                        value={tripRequest.returnDate.toDateString()} 
                        onPress={() => showPicker('returnDate')} 
                    />
                </View>

                <View>
                    <Text style={[styles.label, {color}]}>Returned Date</Text>
                    <TextInput 
                        style={styles.input} 
                        multiline
                        editable
                        placeholder='Trip Purpose' 
                        value={tripRequest.purpose} 
                        onChangeText={text => onChange(text, 'purpose')} 
                        numberOfLines={5}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send Request</Text>
                </TouchableOpacity>
            </View>

            {isPickerShow && (
                <DateTimePicker
                    value={new Date(Date.now())}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onChangeDate}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.Palette.primary, 
    },
    banner: {
        padding: 26,
        paddingTop: 65
    },
    container: {
        backgroundColor: Colors.Palette.white,
        height: '100%',
        padding: 26
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 2
    },
    input: {
        borderColor: '#a3a3a3',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    form: {
        gap: 10
    },
    button: {
        backgroundColor: Colors.Palette.primary,
        padding: 8,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16
    },
    backButton: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 5
    }
})