import React from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../../types';
import styles from './styles';
import { Entypo, Feather, Ionicons, AntDesign } from '@expo/vector-icons';

export type GroupFooterContainerProps = {
    post: PostType
}

const GroupFooterContainer  = ({ post }:GroupFooterContainerProps ) => (
    <View style ={styles.container} >
        <View style= {styles.iconContainer}>
        <Feather name={"message-circle"} size={18} color={'#008000'} />
        <Text style={styles.number}>{post.NumberOfComments}</Text>
        </View>
        <View style= {styles.iconContainer}>
        <AntDesign name={"hearto"} size={16} color={'#008000'} />
        <Text style={styles.number}>{post.NumberOfLikes}</Text> 
        </View>
        <View style= {styles.iconContainer}>
        <Ionicons name={"share-outline"} size={19} color={'#008000'} />
        <Text style={styles.number}>{post.NumberOfShares}</Text> 
        </View>
    </View>
)

export default GroupFooterContainer;