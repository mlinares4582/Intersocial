import React from 'react'
import { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native'
import {AntDesign , MaterialIcons} from '@expo/vector-icons';

const InputBox = () => {

    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('Sending a new message', newMessage);

        setNewMessage('');
    }

  return (
    <View style= {styles.container}>
        {/* Icon */}
        <AntDesign name= 'plus' size={24} color='royalblue' />

        {/* Text Input */}
        <TextInput  value={newMessage} onChangeText={setNewMessage} style= {styles.input} placeholder="Input your message..." />

        {/* Icon */}
        <MaterialIcons onPress={onSend} style= {styles.send} name="send" size={24} color='white' />

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke'  ,
        padding: 5,  
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 50,
    },
    send: {
        backgroundColor: 'green',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    },
})

export default InputBox;