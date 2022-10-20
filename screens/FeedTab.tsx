import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TimelineFeed from '../components/TimelineFeed';
import postFeed from '../data/timelinePost';

export default function FeedTab({ navigation }: RootTabScreenProps<'Feed'>) {
  return (
    <View style={styles.container}>
      <TimelineFeed post={postFeed[0]}/>

      
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
