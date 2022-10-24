import React from "react";
import { Image }  from 'react-native';

export type ProfilePictureProps = {
    image?: string;
    size?:number;
}

const ProfilePicture = ({image, size = 50}: ProfilePictureProps) =>(
    <Image 
        source={{uri: image}} //Here we can change the image to local(for now we can get it from address link in google)
        style={{width: size, 
                height: size, 
                borderRadius:size
            }} 
        />
)


export default ProfilePicture;