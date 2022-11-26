import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import bg from '../assets/images/bg2.jpg';
import Message from '../components/Message'
import messages from '../assets/chatData/messages.json'
import InputBox from '../components/InputBox'




const ChatScreen = () => {



  return (
    <KeyboardAvoidingView
    behavior = {Platform.OS === "ios" ? 'padding' : 'height'}
    style = {styles.bg} > 
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList 
        data={messages}
        renderItem={({ item }) => <Message messages={item} />}
        style = {styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
    </ KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    bg:{
        flex: 1,
    },
    list: {
        padding: 10,
    }
});


export default ChatScreen