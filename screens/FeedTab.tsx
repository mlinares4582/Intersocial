import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Feed from '../components/Feed';
import postFeed from '../data/timelinePost';

// export default function FeedTab({ navigation }: RootTabScreenProps<'Feed'>) {
export default function FeedTab() {
  return (
    <View style={styles.container}>
      <Feed/>
      {/* <Feed post={postFeed[0]}/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
