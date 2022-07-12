import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Pages
import HomeApp from './src/pages/home/Home';
import LoginApp from './src/pages/login/Login';
import SignupApp from './src/pages/signup/Signup';
import InitApp from './src/pages/init/Init';
import Step1App from './src/pages/signup/Step1';
import Step2App from './src/pages/signup/Step2';
import Step3App from './src/pages/signup/Step3';
import Step4App from './src/pages/signup/Step4';
import Step5App from './src/pages/signup/Step5';
import Step6App from './src/pages/signup/Step6';
import SpendApp from './src/pages/AddSpend/Spend';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <HomeApp root={navigation} />
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <LoginApp root={navigation} />
    </View>
  );
}

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <SignupApp root={navigation} />
    </View>
  );
}

function Init({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <InitApp root={navigation}/>
    </View>
  );
}

function Step1({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step1App root={navigation} />
    </View>
  );
}

function Step2({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step2App root={navigation} />
    </View>
  );
}
function Step3({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step3App root={navigation} />
    </View>
  );
}
function Step4({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step4App root={navigation} />
    </View>
  );
}
function Step5({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step5App root={navigation} />
    </View>
  );
}
function Step6({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <Step6App root={navigation} />
    </View>
  );
}

function Spend({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#006ea8' barStyle="light-content" />
      <SpendApp root={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />

      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
      <Stack.Screen name="Step4" component={Step4} />
      <Stack.Screen name="Step5" component={Step5} />
      <Stack.Screen name="Step6" component={Step6} />

      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Spend" component={Spend} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTextLogin: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
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
  }
});
