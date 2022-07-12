import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { doc, setDoc } from "firebase/firestore";
import {
  signup1,
  logout1,
  login1,
  useAuth,
  db,
} from "../../../database/firebase";

export default function Spend(props) {
  const [state, setState] = useState({
    gasto: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const user = useAuth();

  const addGasto = async () => {
    if (state.gasto == "") {
      alert("There is a blank field");
    } else {
      try {
        await db
          .collection("transactions")
          .add({
            date: new Date(),
            userId: user.uid,
            mount: state.gasto,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", user.email);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

        props.root.navigate("Init");
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Amount"
        onChangeText={(value) => handleChangeText("gasto", value)}
        style={styles.inputLogin}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="#000000"
      />
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonText} onPress={() => addGasto()}>
          AGREGAR
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
  inputLogin: {
    width: 300,
    height: 50,
    backgroundColor: "#fcffff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000000",
    marginVertical: 10,
    borderBottomColor: "#006ea8",
    borderBottomWidth: 1,
    marginBottom: 50,
  },
});
