import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Init(props) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Codigo de cliente: {props.id}</Text>
                <Text>Email de cliente: {props.email}</Text>
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
    }
});
