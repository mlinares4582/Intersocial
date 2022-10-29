import { StyleSheet, TouchableOpacity,SafeAreaView,TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';


// export default function FeedTab({ navigation }: RootTabScreenProps<'Feed'>) {
export default function NewPostScreen() {

const [post ,setPost] = useState("Hellow ")
const [imageUrl ,setImageUrl] = useState("")

const onPressPost = () => {
    console.log(`Posting: ${post}
    Image: ${imageUrl}`);
}
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContianer}>
            <AntDesign name={'closecircleo'} size={25} color={Colors.light.tint}/>
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
                <TextInput 
                    value={imageUrl}
                    onChangeText={(value) => setImageUrl(value)}
                    style={styles.imageInput}
                    placeholder={"Post image(optional)"}
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
imageInput: {

},
});

//ME QUEDE EN 2:24:50 EN LO DEL STYLO DEL BOTON Y DEL HEADER