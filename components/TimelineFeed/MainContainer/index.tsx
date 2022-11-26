import React, { useEffect, useState } from 'react';
import { View , Text, Image} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer'; 
import moment from 'moment';
import { getUser} from '../../../graphql/queries'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { USERNAME_SUFFIX } from '@aws-amplify/ui-components/dist/types/common/constants';
import { UserData } from 'aws-cdk-lib/aws-ec2';

export type MainContianerProps = {
    post: PostType;

}

const MainContianer = ({ post }: MainContianerProps) => {
    const [user, setUser] = useState(null)


    useEffect(() => {
      //get the current user
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true})
        if(!userInfo) {
          return;
        }
        try {
          const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
          if (userData) {
            setUser(userData.data.getUser.name);
            console.log("SETUSERRRRR", userData.data.getUser.name)
          }
        }catch (e) {
          console.log("ERROR",e);
        }
      }
  
      fetchUser()
    }, [])

    console.log("username",post)
    return (
    <View style={styles.container}>
        <View style={styles.postHeaderContainer}>
            <View style={styles.postHeaderName}>
                <Text style={styles.name}>Michael Linares</Text>
                <Text style={styles.username}>@mglinares</Text>
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