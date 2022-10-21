import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

  
const NewPostButton = () => {

    const onPress = () => {
        console.warn('Open new post');
    }


    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.button} 
        onPress={onPress}>
            <MaterialIcons name={'post-add'} size={30} color= "white"/>
        </TouchableOpacity>

    )

}

export default NewPostButton;