import React from 'react';
import { View, FlatList } from 'react-native';
import GroupPost from '../../GroupData/GroupPost';
import GroupTimeline from '../GroupTimeline';

const Feed = () => (
    <View style={{ width: '100%'}}>
        <FlatList
        data={GroupPost}
        renderItem={({item}) => <GroupTimeline post={item} />}
        keyExtractor={(item) => item.id}
        
        />
    </View>
    )

export default Feed;