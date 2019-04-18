import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm'


export default class Login extends React.Component{
    render (){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../images/logo.png')}/>
                    <Text style={styles.title}>¡Bienvenido!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width:350,
        height:75
    },
    title:{
        color: '#2c3e50',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30,
        fontFamily: 'sans-serif-light'
    }
});