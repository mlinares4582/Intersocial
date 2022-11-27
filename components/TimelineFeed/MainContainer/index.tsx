import React, { useEffect, useState } from 'react';
import { View , Text, Image} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer'; 
import moment from 'moment';
import { getUser} from '../../../graphql/queries'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';



export type MainContianerProps = {
    post: PostType;

}

const MainContianer = ({ post }: MainContianerProps) => {
    const [user, setUser] = useState(null)
    console.log("USEEEERRRRR",user?.["image"])
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

    console.log("username",post.image)
    return (
    <View style={styles.container}>
        <View style={styles.postHeaderContainer}>
            <View style={styles.postHeaderName}>
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.username}>@{user}</Text>
                <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>  
            </View> 
            <Ionicons name={"chevron-down"} style={styles.chevronIcon} size={16} />
        </View>
        <View>
            <Text style={styles.content}>{post.content}</Text>
            {!!post.image && <Image style={styles.image} source={{uri: post.image}} />}
        </View>

        <Footer post={post}/>
    </View>
    )
}

export default MainContianer;
// {post.user.name}
// {post.user.username}
// 
// 