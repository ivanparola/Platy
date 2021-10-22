import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Home(props) {
    return (
        <ScrollView>
            <View style={styles.blockHome}>
                <Text>My Home</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => props.root.navigate('Login')}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => props.root.navigate('Signup')}>Signup</Text>
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
    blockHome: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
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
});
