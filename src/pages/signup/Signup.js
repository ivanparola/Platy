import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';

//import firebase from '../../../database/firebase';
import { signup1, login1, logout1, current1, db, firebase} from '../../../database/firebase';

export default function Signup(props) {

    const [loading, setLoading] = useState(false);
    const currentUser = current1();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        loader: false
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    async function handleSignup() {
        setLoading(true);
        try {
            await signup1(state.email, state.password);
        } catch (error) {
            console.log(error)
            alert(error.message);
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout1();
        } catch (error) {
            console.log(error)
            alert(error.message);
        }
        setLoading(false);
    }


    const createNewUser = async () => {
        if (state.firstName == "" || state.lastName == "" || state.email == "" || state.password == "") {

            alert('There is a blank field');

        } else {

            handleChangeText("loader", true);

            try {
                await signup1(state.email, state.password);


                // await firebase.db.collection('users').add({
                //     firstName: state.firstName,
                //     lastName: state.lastName,
                //     email: state.email,
                //     password: state.password,
                //     ingreso: 0,
                //     objetivo: 0,
                // });

                setTimeout(() => {
                    handleChangeText("loader", false);
                }, 1000)

                props.root.navigate('Step1');

            } catch (error) {
                alert(error.message);
                props.root.push('Signup');

            }

        }
    }

    return (
        <ScrollView>
            <View style={styles.blockLogin}>
                <ActivityIndicator size="large" color="#006ea8" animating={state.loader} />

                <Image style={styles.imgLogo} source={require('../../../assets/img/logo/1-1.png')} />

                <TextInput placeholder='First Name' onChangeText={(value => handleChangeText('firstName', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000000' />
                <TextInput placeholder='Last Name' onChangeText={(value => handleChangeText('lastName', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000000' />
                <TextInput placeholder='Email' onChangeText={(value => handleChangeText('email', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000000' />
                <TextInput placeholder='Password' onChangeText={(value => handleChangeText('password', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' secureTextEntry={true} placeholderTextColor='#000000' />
                <TextInput placeholder='Confirm Password' onChangeText={(value => handleChangeText('passwordConfirm', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' secureTextEntry={true} placeholderTextColor='#000000' />

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonText} onPress={() => createNewUser()}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.signUpTextLogin}>
                    <Text style={styles.signUpText}>Already have an account?</Text>
                    <Text style={styles.signUpButton} onPress={() => props.root.navigate('Login')}>Sign in</Text>
                </View>


            </View >
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    blockLogin: {
        flex: 1,
        alignItems: 'center',
    },
    textLogo: {
        color: 'black',
    },
    inputLogin: {
        width: 300,
        height: 50,
        backgroundColor: '#fcffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10,
    },
    buttonLogin: {
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
    signUpTextLogin: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 35,
        flexDirection: 'row',
    },
    signUpText: {
        color: 'white',
        fontSize: 16,
    },
    signUpButton: {
        color: '#006ea8',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    text2: {
        color: 'white',
    },
    imgLogo: {
        width: 150,
        height: 100,
        marginBottom: 40
    },
});