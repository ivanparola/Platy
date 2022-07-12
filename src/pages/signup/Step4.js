import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Step4(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgIlustracion}
        source={require("../../../assets/img/signup/step4/Ilustracion.png")}
      />
      <Image
        style={styles.imgText}
        source={require("../../../assets/img/signup/step4/Texto.png")}
      />
      <TouchableOpacity style={styles.buttonLogin}>
        <Text
          style={styles.buttonText}
          onPress={() => props.root.navigate("Step5")}
        >
          INGRESAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  buttonLogin: {
    width: 300,
    backgroundColor: "#006ea8",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  imgButton: {
    width: 200,
    height: 150,
  },
});
