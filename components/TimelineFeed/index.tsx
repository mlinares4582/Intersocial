import React from 'react';
import { View } from 'react-native';
import LeftContianer from './LeftContainer';
import MainContianer from './MainContainer';

import { PostType } from '../../types'
import styles from './styles'

export type TimelineFeedProps = {
    post: PostType,

}

const TimelineFeed = ({ post }: TimelineFeedProps) => (
    <View style={styles.container}>
        <LeftContianer user={post.user}/>
        <MainContianer post={post}/>
        
    </View>


) 

export default TimelineFeed;
