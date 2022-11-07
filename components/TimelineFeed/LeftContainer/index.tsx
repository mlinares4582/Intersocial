import React from 'react';
import { View } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';


export type LeftContianerProps = {
    user: UserType,

}

const LeftContianer = ({ user }: LeftContianerProps) => {

    return(
    <View>
        < ProfilePicture image={user.image} size={55}/>
    </View>
    )
}

export default LeftContianer;
// 