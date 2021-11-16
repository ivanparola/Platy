import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { collection, doc, setDoc, where, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Table, Row, Rows } from 'react-native-table-component';





import {
    useFonts,
    Pacifico_400Regular
} from '@expo-google-fonts/pacifico';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import firebase from '../../../database/firebase';

export default function Init(props) {



    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    const screenWidth = Dimensions.get("window").width;



    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
    }


    const q = query(collection(db, "transactions"), where("userId", "==", user.uid));
    const transactionByUser = getDocs(q);

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
            }
        ]
    };

    this.state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '456\n789'],
            ['a', 'b', 'c', 'd']
        ]
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, <Text style={styles.bold}>{displayName}</Text></Text>

                <View style={styles.blockImgLogin}>
                    <Image style={styles.img1Center} source={require('../../../assets/img/logo/dribbble-interview.gif')} />
                </View>
                <Text style={styles.textMainValue}>your balance</Text>
                <Text style={styles.mainValue}>${props.objetivo}</Text>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonText} onPress={() => addTransaction()}>Agregar transaccion</Text>
                </TouchableOpacity>
                <LineChart
                    data={data}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "gray",
                        backgroundGradientFrom: "gray",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.tableData} textStyle={styles.text} />
                </Table>

            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        left: -120,
        marginVertical: 30,
        fontFamily: 'Pacifico_400Regular',
        fontSize: 21
    },
    bold: {
        fontWeight: 'bold',
    },
    img1Center: {
        width: Dimensions.get('window').width,
        height: 100
    },
    textMainValue: {
        color: 'white',
        left: 0,
        marginVertical: 20,
        fontSize: 21,
        alignSelf: 'flex-start'
    },
    mainValue: {
        color: 'white',
        left: -120,
        marginVertical: 0,
        fontSize: 70,
        alignSelf: 'flex-start'
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
    graphStyle: {
        marginVertical: 8,
        borderRadius: 16
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6
    }
});
