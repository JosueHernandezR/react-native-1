import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}> Login </Text>
                <TextInput placeholder='Username' onChangeText={ TextInputValue =>
                    this.setState({username : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={
                        {
                            textAlign: 'center',
                            width: '90%',
                            marginBottom: 7,
                            height: 40,
                            borderRadius: 5 ,
                            fontSize: 20,
                        }
                    }/>

                <TextInput placeholder='Password' onChangeText={ TextInputValue =>
                    this.setState({password: TextInputValue }) }
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    style={
                        {
                            textAlign: 'center',
                            width: '90%',
                            marginBottom: 7,
                            height: 40,
                            borderRadius: 5 ,
                            fontSize: 20,
                        }
                    }/>                
                <View style={{margin:7}} />
                <Button onPress={this.props.onLoginPress} title="Submit"/>
            </ScrollView>
        )
    }
}