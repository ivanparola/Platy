import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Step2(props) {


    return (
        <ScrollView>
            <View style={styles.container}>
            <Image style={styles.imgIlustracion} source={require('../../../assets/img/signup/step2/Ilustracion.png')} />
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step2/Texto.png')} />
            <TouchableOpacity onPress={() => props.root.navigate('Step3')}>
            <Image source={require('../../../assets/img/signup/step2/Boton.png')}/>
            </TouchableOpacity>
            </View >
        </ScrollView>
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
    }

});