import React from 'react';
import { View, FlatList } from 'react-native';
import postFeed from '../../data/timelinePost'
import TimelineFeed from '../TimelineFeed';

const Feed = () => (
    <View style={{width: '100%'}}>
        <FlatList 
            data={postFeed} 
            renderItem={({item}) => <TimelineFeed post={item}/>}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default Feed;