import React from 'react';
import { View } from 'react-native';
import LeftContianer from './LeftContainer';
import MainContianer from './MainContainer';

import { PostType } from '../../types'

export type TimelineFeedProps = {
    post: PostType,

}

const TimelineFeed = ({ post }: TimelineFeedProps) => (
    <View>
        <LeftContianer user={post.user}/>
        <MainContianer post={post}/>
        
    </View>


) 

export default TimelineFeed;
