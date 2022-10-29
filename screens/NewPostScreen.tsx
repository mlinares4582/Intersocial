import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';


// export default function FeedTab({ navigation }: RootTabScreenProps<'Feed'>) {
export default function NewPostScreen() {

  const onPressPost = () => {
    console.warn('POST POST')
  }
  return (
    
    <View style={styles.container}>
      <View>
        <AntDesign name={'closecircleo'} size={25} color={Colors.light.tint}/>
        <TouchableOpacity style={styles.button} onPress={onPressPost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,

  },
  buttonText:{
    paddingHorizontal: 20,
    paddingvertical:10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

//ME QUEDE EN 2:24:50 EN LO DEL STYLO DEL BOTON Y DEL HEADER