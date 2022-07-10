import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Pacifico_400Regular
} from '@expo-google-fonts/pacifico';

export default function Home(props) {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.blockHome}>
                <Image style={styles.imgLogo} source={require('../../../assets/img/logo/1-1.png')} />
                <Text style={styles.title}>Platy</Text>
                <View style={styles.blockButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => props.root.navigate('Login')}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => props.root.navigate('Signup')}>Signup</Text>
                    </TouchableOpacity>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockHome: {
        flex: 1,
        alignItems: 'center',
        marginTop: 75
    },
    button: {
        width: 300,
        backgroundColor: '#006ea8',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    imgLogo: {
        width: 200,
        height: 150,
    },
    title: {
        fontFamily: 'Pacifico_400Regular',
        fontSize: 40,
        color: 'white',
        fontSize: 60,
        marginTop: 10
    },
    blockButton: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
    },
});
