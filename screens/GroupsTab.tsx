import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GroupTimeline from '../components/GroupTimeline';

import posts from '../GroupData/GroupPost';

export default function GroupsTab() {
return (
    <View style={styles.container}>
        <GroupTimeline post={posts[0]} />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

});
