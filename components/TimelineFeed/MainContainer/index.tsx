import React from 'react';
import { View , Text, Image} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';

export type MainContianerProps = {
    post: PostType;

}

const MainContianer = ({ post }: MainContianerProps) => (
    <View style={styles.container}>
        <View style={styles.postHeaderContainer}>
            <View style={styles.postHeaderName}>
                <Text style={styles.name}>{post.user.name}</Text>
                <Text style={styles.username}>@{post.user.username}</Text>
                <Text style={styles.createdAt}>15s</Text>  
            </View> 
            <Ionicons name={"chevron-down"} style={styles.chevronIcon} size={16} />

        </View>
        <View>
            <Text>{post.content}</Text>
            {!!post.image && <Image source={{uri: post.image}} />}
        </View>
    </View>
) 

export default MainContianer;
