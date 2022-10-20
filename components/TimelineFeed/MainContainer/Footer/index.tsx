import React from 'react';
import { View , Text} from 'react-native';
import { PostType } from '../../../../types';
import styles from './styles'
import { Ionicons, Feather, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export type FooterProps = {
    post: PostType;

}

const Footer = ({ post }: FooterProps) => (
    <View style={styles.container}>
        
        <View style={styles.iconContainer}>
            <AntDesign name={'like2'} size={20} color={'gray'}/>
            <Text style={styles.number}>{post.numberOfLikes}</Text>
        </View>

        <View style={styles.iconContainer}>
            <Feather name={'message-circle'} size={20} color={'gray'}/>
            <Text style={styles.number}>{post.numberOfComments}</Text>
        </View>

        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={'share-outline'} size={25} color={'gray'}/>
            <Text style={styles.number}>{post.numberOfShares}</Text>
        </View>
    </View>
) 

export default Footer;


// ME QUEDE EN 1:50:30 PARA LO DEL MOMENTO EN QUE SE HACE EL POST