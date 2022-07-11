import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { signup1, login1, logout1, current1, db, firebase} from '../../../database/firebase';

export default function Step5(props) {

    const [state, setState] = useState({
        objetivo: '',
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

   // const auth = getAuth();
  //  const user = auth.currentUser;

  const user = current1();

    const addObjetivos = async () => {

         if (state.objetivo == "") {

            alert('There is a blank field');

        } else {

            handleChangeText("loader", true);

            try {

                await firebase.db.collection('userDetails').doc(user.uid).update({
                    objetivo: state.objetivo
                })

                setTimeout(() => {
                    handleChangeText("loader", false);
                }, 1000)

                props.root.navigate('Step6');

            } catch (error) {
                console.log(error);
                alert(error)
            }

        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imgText} source={require('../../../assets/img/signup/step5/Texto.png')} />
            <TextInput placeholder='$0.00' onChangeText={(value => handleChangeText('objetivo', value))} style={styles.inputLogin} underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000000' />
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText} onPress={() =>addObjetivos()}>INGRESAR</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonLogin: {
        width: 300,
        backgroundColor: '#006ea8',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16,
    },
    inputLogin: {
        width: 200,
        height: 50,
        backgroundColor: '#fcffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10,
    },

});