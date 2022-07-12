import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import {
  signup1,
  logout1,
  login1,
  useAuth,
  db,
} from "../../../database/firebase";

import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Init(props) {
  // const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    objetivo1: "",
    ingresosMensuales1: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const screenWidth = Dimensions.get("window").width;

  const user = useAuth();

  var docRef = db.collection("userDetails").doc(user.email);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const { createDate, ingresosMensuales, objetivo, userId } = doc.data();
        handleChangeText("objetivo1", objetivo);
        handleChangeText("ingresosMensuales1", ingresosMensuales);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          1, 6.52, 0.1, 9.0, 11.03, 25.0, 70.0, 80.0, 80.0, 80.0, 80.0, 80.0,
        ],
      },
    ],
  };

  const cerrar = async () => {
    await logout1;
    props.root.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Bienvenid@, <Text style={styles.bold}>{user.displayName}</Text>
        </Text>

        <View style={styles.blockImgLogin}>
          <Image
            style={styles.img1Center}
            source={require("../../../assets/img/logo/dribbble-interview.gif")}
          />
        </View>
        <Text style={styles.textMainValue}>Tu objetivo</Text>
        <Text style={styles.mainValue}>${state.objetivo1}</Text>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text
            style={styles.buttonText}
            onPress={() => props.root.navigate("Spend")}
          >
            AGREGAR GASTO
          </Text>
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
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View>
        <Text style={styles.signUpButton} onPress={() => cerrar()}>
          Cerrar Sesion
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    left: -120,
    marginVertical: 30,
    fontFamily: "Pacifico_400Regular",
    fontSize: 21,
  },
  bold: {
    fontWeight: "bold",
  },
  img1Center: {
    width: Dimensions.get("window").width,
    height: 100,
  },
  textMainValue: {
    color: "white",
    left: 0,
    marginVertical: 20,
    fontSize: 21,
    alignSelf: "flex-start",
  },
  mainValue: {
    color: "white",
    left: -120,
    marginVertical: 0,
    fontSize: 70,
    alignSelf: "flex-start",
  },
  buttonLogin: {
    width: 300,
    backgroundColor: "#006ea8",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
  },
  signUpTextLogin: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 35,
    flexDirection: "row",
  },
  signUpText: {
    color: "white",
    fontSize: 16,
  },
});
