import { StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GroupFeed from '../components/GroupFeed';
// import posts from '../GroupData/GroupPost';
import GroupButton from '../components/GroupButton';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Amplify, Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { createGroupPost} from '../graphql/mutations'
import * as ImagePicker from 'expo-image-picker';
const { v4: uuidv4 } = require('uuid');
import 'react-native-get-random-values';

export default function NewPostScreen() {
    const navigation = useNavigation()

    const [post,setPost] = useState("");
    const [imageUrl ,setImageUrl] = useState("")

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
    
        
    
        if (!result.cancelled) {
        setImageUrl(result.uri);
        }
        console.log(result);
    
        
    };

    const uploadImage = async () => {
        try {
            const response = await fetch(imageUrl);
            console.log("RESSSPONSE",response)
            const blob = await response.blob();
            const urlParts = imageUrl.split('.');
            const extension = urlParts[urlParts.length - 1];
            // console.log("extension",extension)
            const key =`${uuidv4()}.${extension}`;
            // console.log("key",key);
            const res = await Storage.put(key, blob);
            console.log("RESSS",res)
    
            return key;
            
        } catch (error) {
            console.log("eerr",error)
        }
        // return '';
    
    }

    const onPressPost = async () => {
    // let image;
    // if(!!imageUrl) {
    //     image = await uploadImage();
    // }
    // console.log("IMAGGEEEE",image);

    try {
        const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});
        
        const newGroupPost ={
            content: post,
            image: imageUrl,
            userID: currentUser.attributes.sub
        }

        await API.graphql(graphqlOperation(createGroupPost, {input : newGroupPost}));
        navigation.goBack();
    } catch (e) {
        console.log("ERROR",e)
    }


    
    }


return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name={'closecircleo'} size={25} color={Colors.light.tint}/>
                </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onPressPost}>
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
                placeholder="What's new?"
            />
                {/* <TextInput
                value={imageUrl}
                onChangeText={(value) => setImageUrl(value)}
                style={styles.imageInput}
                placeholder="Image url (optional)"
            /> */}

            <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.pickImage}>Pick an Image</Text>
                </TouchableOpacity>
                <Image source={{uri: imageUrl}} style={styles.image}/>
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
    paddingVertical:25
},
headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15,
},
button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
},
buttonText: {
    paddingHorizontal: 20,
    paddingvertical:10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18

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
pickImage: {
    fontSize: 15,
    color: Colors.light.tint,
    marginVertical: 10,
},
image: {
    width: 300,
    height: 200,
    borderRadius: 30
    
}


});
