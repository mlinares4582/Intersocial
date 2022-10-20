import React from "react";
import { Image }  from 'react-native';

export type ProfilePictureProps = {
    image?: string;
    size?:number;
    source?: string;
}

// const ProfilePicture = ({ size = 50}: ProfilePictureProps) =>(
//     <Image 
//         source={require('')} 
//         style={{width: size, 
//                 height: size, 
//                 borderRadius:size
//             }} 
//         />
// )
// {uri: image}

const ProfilePicture = ({image, size = 50}: ProfilePictureProps) =>(
    <Image 
        source={{uri: image}} 
        style={{width: size, 
                height: size, 
                borderRadius:size
            }} 
        />
)

export default ProfilePicture;