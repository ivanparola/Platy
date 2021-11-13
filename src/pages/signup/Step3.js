import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
export default function Step3(props) {

    return (
        <ScrollView>
            <View style={styles.container}>
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step3/Texto.png')} />
            <ImageBackground source={require('../../../assets/img/signup/step3/Input.png')} resizeMode="cover" style={styles.inputBackground}>
            <TextInput style={styles.inputIngreso}/>
            </ImageBackground>
            <TouchableOpacity onPress={() => props.root.navigate('Step4')}>
            <Image source={require('../../../assets/img/signup/step3/Boton.png')}/>
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
    },
    inputIngreso: {
        width: 300,
        height: 50,
        backgroundColor: '#fcffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10,
    },

});