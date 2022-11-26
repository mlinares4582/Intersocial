import { userInfo } from 'os';
import React from 'react';
import { View } from 'react-native';
import { User } from '../../../API';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';


export type LeftContianerProps = {
    user: User,

}



const LeftContianer = ({ user }: LeftContianerProps) => (
    <View>
        < ProfilePicture image={'https://static.wikia.nocookie.net/characters/images/5/5d/Eren-Jaeger.jpg/revision/latest?cb=20160708134212'}/>
    </View>

) 

export default LeftContianer;

// image={user.image} size={55}