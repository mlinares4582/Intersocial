import { StyleSheet, TouchableOpacity,SafeAreaView,TextInput, Platform, Button,Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import React, { useEffect, useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import { Amplify, Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { createPost} from '../graphql/mutations'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
const { v4: uuidv4 } = require('uuid');
import 'react-native-get-random-values';



// export default function FeedTab({ navigation }: RootTabScreenProps<'Feed'>) {
export default function NewPostScreen() {

const navigation = useNavigation()

const [post ,setPost] = useState("")
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
        // console.log("RESSSPONSE",response)
        const blob = await response.blob();
        const urlParts = imageUrl.split('.');
        const extension = urlParts[urlParts.length - 1];
        // console.log("extension",extension)
        const key =`${uuidv4()}.${extension}`;
        // console.log("key",key);
        await Storage.put(key, blob);

        return key;
        
    } catch (error) {
        console.log("eerr",error)
    }
    return '';

}

const onPressPost = async () => {
    let image;
    if(!!imageUrl) {
        image = await uploadImage();
    }
    console.log(image);

    try {

        const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});

        const newPost ={
            content: post,
            image,
            userID: currentUser.attributes.sub
        }
        //POST REQUEST
        await API.graphql(graphqlOperation(createPost, {input : newPost}));
        navigation.goBack();
    }catch (e) {
        console.log("ERROR",e)
    }
}
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContianer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name={'closecircleo'} size={25} color={Colors.light.tint}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressPost}>
            <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.newPostContainer}>
            <ProfilePicture image={'https://i.pinimg.com/280x280_RS/58/bd/d2/58bdd26dcfe5c7708175a631c75b8853.jpg'}/>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={post}
                    onChangeText={(value) => setPost(value)}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.postInput}
                    placeholder={"What's new?"}
                />
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
headerContianer :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    padding: 15,
},
button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,

},
buttonText:{
    paddingHorizontal: 20,
    paddingvertical:10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
},
newPostContainer: {
    flexDirection: 'row',
    padding: 15,

},
inputContainer: {
    marginLeft: 10,
},
postInput: {
    maxHeight:300,
    height: 100,
    fontSize: 20

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

//ME QUEDE EN 2:24:50 EN LO DEL STYLO DEL BOTON Y DEL HEADER