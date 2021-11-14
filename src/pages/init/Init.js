import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';

import {
    useFonts,
    Pacifico_400Regular
} from '@expo-google-fonts/pacifico';

import firebase from '../../../database/firebase';

export default function Init(props) {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    var usuario = firebase.db.collection('users').doc(props.id);
    usuario.get().then(usuarioBBDD => {
        if (!usuarioBBDD.exists) {
            console.log("No existe el usuario");
            //Entiendo que aqui va el código para asignar el mail e imagen
        }
        else {
            console.log("Existe el usuario");
            console.log(usuarioBBDD);
        }
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, <Text style={styles.bold}>{props.firstName} {props.lastName}</Text></Text>

                <View style={styles.blockImgLogin}>
                    <Image style={styles.img1Center} source={require('../../../assets/img/logo/dribbble-interview.gif')} />
                </View>

                <Text>Codigo de cliente: {props.id}</Text>
                <Text>Email de cliente: {props.email}</Text>
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        left: -120,
        marginVertical: 30,
        fontFamily: 'Pacifico_400Regular',
        fontSize: 21
    },
    bold: {
        fontWeight: 'bold',
    },
    img1Center: {
        width: Dimensions.get('window').width,
        height: 100
    }
});
