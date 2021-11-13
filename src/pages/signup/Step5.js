import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
export default function Step5(props) {

    return (
        <View style={styles.container}>
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step5/Texto.png')} />
            <TextInput style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000000' />
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText} onPress={() => props.root.navigate('Step6')}>INGRESAR</Text>
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
        width: 400,
        height: 400,
    },
    imgText: {
        width: 400,
        height: 200,
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
    },
    inputLogin: {
        width: 200,
        height: 50,
        backgroundColor: '#fcffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10,
    },

});