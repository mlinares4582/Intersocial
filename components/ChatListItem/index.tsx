import React from 'react';
import { Text, View , Image, StyleSheet, Pressable } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useNavigation } from '@react-navigation/native';


const ChatListItem = ({chat}) => {

    const navigation = useNavigation();
    //console.log(props);
    return (
        
        <Pressable style = {styles.container} onPress={() => navigation.navigate('Chat')}>
            <Image source={{uri: chat.user.image }} style = {styles.image} />

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1} >
                    {chat.user.name}
                    </Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>

                <Text numberOfLines={2} style={styles.subTitle}>
                {chat.lastMessage.text}
                </Text>
            </View>
        </Pressable>
      
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:'lightgrey',
        //backgroundColor: 'red',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'grey'
    },
})

export default ChatListItem;
