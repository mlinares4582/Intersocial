import React from 'react';
import { View } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type LeftContianerProps = {
    user: UserType,

}

const LeftContianer = ({ user }: LeftContianerProps) => (
    <View>
        < ProfilePicture image={user.image} size={75}/>
        
        
    </View>

) 

export default LeftContianer;
