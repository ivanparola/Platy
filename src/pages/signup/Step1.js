import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Step1(props) {


    return (
        <View style={styles.container}>
            <Image style={styles.imgIlustracion} source={require('../../../assets/img/signup/step1/Ilustracion.png')} />
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step1/Texto.png')} />
            <TouchableOpacity style={styles.buttonLogin} onPress={() => props.root.navigate('Step2')}>
            <Image source={require('../../../assets/img/signup/step1/Boton.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText} onPress={() => login()}>Login</Text>
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
        width: 200,
        height: 150,
    },
    imgText: {
        width: 200,
        height: 150,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonLogin: {
        width: 300,
        backgroundColor: '#006ea8',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16,
    }

});
