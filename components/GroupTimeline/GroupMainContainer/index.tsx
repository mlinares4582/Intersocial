import React from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';

export type GrouMainContainerProps = {
    post: PostType
}

const GroupMainContainer  = ({ post }:GrouMainContainerProps ) => (
    <View>
        <View style={styles.PostHeaderContainer}>
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style={styles.username}>{post.user.username}</Text>
            <Text style={styles.createdAt}>15s</Text>
        </View>
        <View>
            <Text>{post.content}</Text>
            {!! post.image && <Image source={{ uri: post.image }} />}
        </View>
    
    </View>
)

export default GroupMainContainer;