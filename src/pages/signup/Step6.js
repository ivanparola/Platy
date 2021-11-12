import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Step6(props) {


    return (
        <ScrollView>
            <View style={styles.container}>
            <Image style={styles.imgIlustracion} source={require('../../../assets/img/signup/step6/Ilustracion.png')} />
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step6/Texto.png')} />
            <TouchableOpacity onPress={() => props.root.navigate('Init')}>
            <Image source={require('../../../assets/img/signup/step6/Boton.png')}/>
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