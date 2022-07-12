import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

// import firebase from '../../../database/firebase';
// require('firebase/auth')
import { signup1, logout1, login1, useAuth } from "../../../database/firebase";

export default function Login(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ingreso: 0,
    objetivo: 0,
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const [users, setUsers] = useState([]);

  async function handleLogin() {
    try {
      await login1(state.email, state.password).then((user) => {
        console.log(user.user);
        props.root.navigate("Init");
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <View style={styles.blockLogin}>
      <View style={styles.blockImgLogin}>
        <Image
          style={styles.logoUser}
          source={require("../../../assets/img/logo/user-icons.gif")}
        />
      </View>

      <TextInput
        style={styles.inputLogin}
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={(value) => handleChangeText("email", value)}
        placeholder="Email"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.inputLogin}
        underlineColorAndroid="rgba(0,0,0,0)"
        onChangeText={(value) => handleChangeText("password", value)}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#000000"
      />
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonText} onPress={() => handleLogin()}>
          INGRESA
        </Text>
      </TouchableOpacity>
      <View style={styles.signUpTextLogin}>
        <Text style={styles.signUpText}>Todavia no tenes una cuenta?</Text>
        <Text
          style={styles.signUpButton}
          onPress={() => props.root.navigate("Signup")}
        >
          Registrate
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blockLogin: {
    flex: 1,
    alignItems: "center",
  },
  textLogo: {
    color: "black",
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
  signUpTextLogin: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signUpText: {
    color: "white",
    fontSize: 16,
  },
  signUpButton: {
    color: "#006ea8",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 3,
  },
  logoUser: {
    width: 150,
    height: 150,
    marginLeft: 0,
    marginVertical: 0,
  },
  blockImgLogin: {
    backgroundColor: "white",
    width: 158,
    height: 158,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#006ea8",
    marginVertical: 80,
  },
});
