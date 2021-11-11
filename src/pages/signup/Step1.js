import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import Box from '../../components/step/Box'

export default function Step1(props) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>My Step</Text>
                <Box />
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
