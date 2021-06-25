import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
// import { globalStyle } from '../styles/global';

export default function Home( {navigation} ){
    const [promotion] = useState([
        
    ])

    const onPressLogin = () => {
        navigation.navigate('Home');
    }
    const [username, onChangeUsername ] = React.useState('');
    const [password, onChangePassword ] = React.useState('');
    
return (
    <View style={styles.containerLogin}>
        <Text style={styles.topText}>Username</Text>
        <TextInput style={styles.botText}  onChangeText={text => onChangeUsername(text)} placeholder='Username' value={username}/>
        <Text style={styles.topText}>Password</Text>
        <TextInput style={styles.botText} onChangeText={text => onChangePassword(text)} placeholder='Password' value={password} secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.botText}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    containerLogin: {   
        padding: 20,
        alignItems: 'center'
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    botText: {
        fontSize: 17,
        color: '#000'
    },
    loginButton: {
        elevation: 2,
        height: 50,
        width: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems:'center',
        shadowOpacity: 0.5,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        borderRadius: 5
    }
})