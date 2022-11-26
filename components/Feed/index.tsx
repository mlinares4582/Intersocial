import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
// import postFeed from '../../data/timelinePost'
import TimelineFeed from '../TimelineFeed';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import {listPosts } from '../../graphql/queries'


const Feed = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        //get the post from backend and set the state
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            // console.log("postDATA",postData)
            setPosts(postData.data.listPosts.items)
        } catch (e) {
            console.log("ERROR",e)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchPosts();
    }, [])

    return (
        (
            <View style={{width: '100%'}}>
                <FlatList 
                    data={posts} 
                    renderItem={({item}) => <TimelineFeed post={item}/>}
                    keyExtractor={(item) => item["id"]}
                    refreshing={loading}
                    onRefresh={fetchPosts}
                />
            </View>
        )
    )

}

export default Feed;