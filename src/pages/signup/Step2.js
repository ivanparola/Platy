import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Step2(props) {


    return (
        <View style={styles.container}>
            <Image style={styles.imgIlustracion} source={require('../../../assets/img/signup/step2/Ilustracion.png')} />
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step2/Texto.png')} />
            <TouchableOpacity style={styles.buttonLogin} onPress={() => props.root.navigate('Step3')}>
                <Image style={styles.imgButton} source={require('../../../assets/img/signup/step2/Boton.png')} />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgIlustracion: {
        width: 50,
        height: 50,
    },
    imgText: {
        width: 50,
        height: 50,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonLogin: {
        width: 300,
        height: 100,
    },
    imgButton: {
        width: 200,
        height: 150,
    }

});