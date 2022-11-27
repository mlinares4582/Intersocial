import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import GroupPost from '../../GroupData/GroupPost';
import GroupTimeline from '../GroupTimeline';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import {listGroupPosts } from '../../graphql/queries'

const Feed = () => {

    const [groupPosts, setgroupPosts] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchGroupPosts = async () => {
        setLoading(true);
        //get the post from backend and set the state
        try {
            const postGroupData = await API.graphql(graphqlOperation(listGroupPosts));
            // console.log("postDATA",postData)
            setgroupPosts(postGroupData.data.listGroupPosts.items)
        } catch (e) {
            console.log("ERROR",e)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchGroupPosts();
    }, [])

    return (
    <View style={{ width: '100%'}}>
        <FlatList
        data={groupPosts}
        renderItem={({item}) => <GroupTimeline post={item} />}
        keyExtractor={(item) => item["id"]}
        refreshing={loading}
        onRefresh={fetchGroupPosts}
        
        />
    </View>
    )
}

export default Feed;