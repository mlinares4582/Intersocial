import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
// import postFeed from '../../data/timelinePost'
import TimelineFeed from '../TimelineFeed';
import {API, graphqlOperation} from 'aws-amplify'
import { listPosts } from '../../graphql/queries';


const Feed = () => {


    const [postFeed, setPostFeed]= useState([]);
   

    // const[loading, setLoading] = useState(false);

    const fetchPosts = async () => {
    //     //Get posts from backend and set them to state
    //     setLoading(true);
        try{
            const postsData = await API.graphql(graphqlOperation(listPosts));   
            if(postsData.data.listPosts.items !== null)
                setPostFeed(postsData.data.listPosts.items)
        }catch(e){
            console.log(e);
        }//finally {
    //         setLoading(false)
    //     }
    }
    useEffect( () => {

        fetchPosts();
    }, [])


    return(
        <View style={{width: '100%'}}>
            <FlatList 
                data={postFeed} 
                renderItem={({item}) => <TimelineFeed post={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>

    )

}

export default Feed;