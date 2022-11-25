import React from 'react';
import { FlatList } from 'react-native';
import chats from '../assets/chatData/chats.json'
import ChatListItem from '../components/ChatListItem';


const ChatsScreen = () => {
    return (
        <FlatList 
            data={chats}
            renderItem= {({item}) => <ChatListItem chat={item} />}
            
        />
    );
};

export default ChatsScreen;

