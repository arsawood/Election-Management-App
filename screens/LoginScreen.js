import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, Image } from 'react-native';
import firebase from 'firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const LogIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("candidate")
        } catch (err) {
            setError(err.message);
            
        }

    }

    return (
        <View style={styles.container}>
        <Text style = {{fontSize:20, fontWeight:'bold', paddingLeft:80, paddingBottom:20}}>Please Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.textInput}
                secureTextEntry={true}
            />
            {error ?
                <Text style={{ color: 'red' }}> {error} </Text> :
                null}
            <>
                <Button
                    title="LOGIN"
                    onPress={() => LogIn()}
                    color = "#38B6FF" />
            </>
        </View>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    text1: {
        color: 'blue',
        marginTop: 20,
        fontSize: 13
    }
})