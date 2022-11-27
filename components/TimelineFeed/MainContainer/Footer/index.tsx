import React, { useEffect, useState } from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import { PostType } from '../../../../types';
import styles from './styles'
import { Ionicons, Feather, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { createLike } from '../../../../graphql/mutations';
import { CreateLikeInput } from '../../../../API';



export type FooterProps = {
    post: PostType;

}

const Footer = ({ post }: FooterProps) => {

    function getRandomInt(min: any, max: any) {
        let total
        min = Math.ceil(min);
        max = Math.floor(max);
        total = Math.floor(Math.random() * (max - min + 1)) + min; 
        return total 
    }

    const [user, setUser] =useState(null);
    const [myLike, setMyLike] =useState(null);

    useEffect(() => {
        const fetchUser = async () =>{
            const user = await Auth.currentAuthenticatedUser({ bypassCache: true});
            // console.log("user del footer",user)
            setUser(user)  
        } 


        fetchUser()
    },[])

    const onLike = async () => {
        if(!user) {
            return;
        }

        const likes:CreateLikeInput = {
            userID: user.attributes.sub,
            postID: post.id,
        }
        console.log("like", likes)
        try {
        
        const res = await API.graphql(graphqlOperation(createLike, {input:likes}))
        console.log("response",res)
        } catch (error) {
            console.log("ERROR", error)
        }
    }




    return (
        <View style={styles.container}>
            
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onLike}>
                    <AntDesign name={!myLike ? 'like2':'like1' } size={20} color={!myLike ?'gray': 'red'}/>
                </TouchableOpacity>
                <Text style={styles.number}>{getRandomInt(0,100)}</Text>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Feather name={'message-circle'} size={20} color={'gray'}/>
                </TouchableOpacity>
                <Text style={styles.number}>{getRandomInt(0,100)}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={'share-outline'} size={25} color={'gray'}/>
                </TouchableOpacity>
                <Text style={styles.number}>{getRandomInt(0,100)}</Text>
            </View>
        </View>

    )
}

export default Footer;


// ME QUEDE EN 1:50:30 PARA LO DEL MOMENTO EN QUE SE HACE EL POST