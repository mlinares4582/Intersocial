import React from 'react';
import { View } from 'react-native';
import GroupLeftContainer from './GroupLeftContainer';
import GroupMainContainer from './GroupMainContainer';

import {PostType} from '../../types';
import styles from './styles';

export type GroupTimelineProps = {
    post: PostType,

}

const GroupTimeline = ({post}:GroupTimelineProps ) => (
    <View style={styles.container}>
    <GroupLeftContainer user={post.user}/>
    <GroupMainContainer post={post}/>
    </View>
)

export default GroupTimeline;