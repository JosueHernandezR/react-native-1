import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle = "light-content"
                />
                <TextInput 
                    placeholder="Email"
                    placeTextColor="rgba(44, 62, 80,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeTextColor="rgba(44, 62, 80,0.9)"
                    returnKeyType="go" 
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        fontFamily: 'monospace'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(236, 240, 241,0.6)',
        marginBottom: 10,
        color: 'rgba(44, 62, 80,0.9)',
        paddingHorizontal: 10,
        borderRadius: 20
    },
    buttonContainer:{
        backgroundColor: 'rgba(241, 196, 15,1.0)',
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
});