import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import GroupFooter from './GroupFooterContainer';
import moment from 'moment';
import { getUser} from '../../../graphql/queries'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';


export type GrouMainContainerProps = {
    post: PostType
}

const GroupMainContainer  = ({ post }:GrouMainContainerProps ) => {
    const [user, setUser] = useState(null)
    // console.log("USEEEERRRRR",user?.["image"])
    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true})
        if(!userInfo) {
        return;
        }
        try {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        if (userData) {
            
            setUser(userData.data.getUser.name);
            // console.log("SETUSERRRRR", userData.data.getUser.name)
        }
        }catch (e) {
        console.log("ERROR",e);
        }
    }

    useEffect(() => {
      //get the current user
    fetchUser()
    }, [])

return(
        <View style ={styles.container} >
            <View style={styles.PostHeaderContainer}>
                <View style={styles.PostHeaderName}> 
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.username}>@{user}</Text>
                <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>
                </View>
                <Entypo name={"chevron-down"} size={16} color={'grey'} />
            </View>
            <View>
                <Text style={styles.content}>{post.content}</Text>
                {!! post.image && <Image style={styles.image} source={{ uri: post.image }} />}
                
            </View>
            <GroupFooter post={post} />
        
        </View>
    )
}

export default GroupMainContainer;


