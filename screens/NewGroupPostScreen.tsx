import { StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GroupFeed from '../components/GroupFeed';
// import posts from '../GroupData/GroupPost';
import GroupButton from '../components/GroupButton';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';

export default function NewPostScreen() {

    const [post,setPost] = useState("");
    const [imageUrl,setimageUrl] = useState("");


    const onPostPost = () => {
        console.log(`Posting: ${post}
        Image: ${imageUrl}`);
    }


return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.headerContainer}>
        <AntDesign name="close" size={30} color="#008000" />
        <TouchableOpacity style={styles.button} onPress={onPostPost}>
            <Text style= {styles.buttonText}>Post</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.NewPostContainer}>
            <ProfilePicture image={'https://avatarfiles.alphacoders.com/277/thumb-277051.png'}/>
            <View style={styles.inputContainer}>
            <TextInput
                value={post}
                onChangeText={(value) => setPost(value)} //error
                multiline={true}
                numberOfLines={3}
                style={styles.PostInput}
                placeholder="What's happening?"
            />
                <TextInput
                value={imageUrl}
                onChangeText={(value) => setimageUrl(value)}
                style={styles.imageInput}
                placeholder="Image url (optional)"
            />
            </View>
            
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    //justifyContent: 'center',
},
headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15,
},
button: {
    backgroundColor: '#008000',
    borderRadius: 30,
},
buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'White',
    fontWeight: 'bold',
    fontSize: 16,

},
NewPostContainer: {
    flexDirection: 'row',
    padding:15,

},
inputContainer: {
    marginLeft: 10,
    
},
PostInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
},
imageInput: {

},


});
