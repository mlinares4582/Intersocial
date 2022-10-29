import React from 'react';
import { View } from 'react-native';

import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type GroupLeftContainerProps = {
    user: UserType,
}

const GroupLeftContainer  = ({user}:GroupLeftContainerProps ) => (
    <View>
        <ProfilePicture image={user.image} size={75} />
    </View>
)

export default GroupLeftContainer;
