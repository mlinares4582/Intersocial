import React from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import GroupFooter from './GroupFooterContainer';
import moment from 'moment';


export type GrouMainContainerProps = {
    post: PostType
}

const GroupMainContainer  = ({ post }:GrouMainContainerProps ) => (
    <View style ={styles.container} >
        <View style={styles.PostHeaderContainer}>
            <View style={styles.PostHeaderName}> 
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style={styles.username}>@{post.user.username}</Text>
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

export default GroupMainContainer;



// {!! post.image && <Image style={styles.image} source={{ uri: post.image }} />}