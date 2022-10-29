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

const ProfilePicture = ({image, size = 40}: ProfilePictureProps) =>(
    <Image 
        source={{uri: image}} //Here we can change the image to local(for now we can get it from address link in google)
        style={{width: size, 
                height: size, 
                borderRadius:size,
                
            }} 
        />
)

export default ProfilePicture;