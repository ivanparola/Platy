import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { collection, doc, setDoc, where, orderBy } from "firebase/firestore";
import "firebase/auth"
import { signup1, login1, logout1, current1, db, firebase} from '../../../database/firebase';




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


export default function Init(props) {


    //const user = auth();


    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    const screenWidth = Dimensions.get("window").width;



    const user = current1();
    if (user !== null) {
       const displayName = user.displayName;
       const email = user.email;
       const photoURL = user.photoURL;
       const emailVerified = user.emailVerified;
       const uid = user.uid;
    }


   // const q = query(collection(db, "transactions"), where("userId", "==", user.uid));
    //const transactionByUser = getDocs(q);

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

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, <Text style={styles.bold}>{user.displayName}</Text></Text>

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
