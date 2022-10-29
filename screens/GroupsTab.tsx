import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GroupFeed from '../components/GroupFeed';

//import posts from '../GroupData/GroupPost';
import GroupButton from '../components/GroupButton';


export default function GroupsTab() {
return (
    <View style={styles.container}>
        <GroupFeed  />
        <GroupButton />
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
