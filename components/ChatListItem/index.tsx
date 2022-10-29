import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'


const ChatListItem = () => {

    return(
        
<View style={styles.container}>

    <Image source={{uri: 'https://i.pinimg.com/originals/c1/11/65/c11165595e070242b01223285fa2cdb6.jpg'}} 
    style={styles.image} 
    />

    <View style={styles.content}>
        <View style={styles.row}>
            <Text 
            numberOfLines={1}
            style={styles.name}>Michael</Text>
            <Text 
            numberOfLines={2}
            style={styles.subTitle}>1:00</Text>
        </View>
        <Text style={styles.subTitle}>Hola</Text>
    </View>
</View>
    )

}


const styles= StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,

    },
    image: {
        width: 60,
        height:60,
        borderRadius: 30,
        marginRight:10,
    },
    content:{
        flex:1,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',

    },
    row:{
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex:1,
        fontWeight: 'bold'

    },
    subTitle: {
        color: 'grey'
    }
    

})

export default ChatListItem