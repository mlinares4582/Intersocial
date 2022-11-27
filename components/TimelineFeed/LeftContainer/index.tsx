import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';
import { getUser} from '../../../graphql/queries'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';

export type LeftContianerProps = {
    users: UserType,

}
const LeftContianer = ({ users }: LeftContianerProps) => {

    const [user, setUser] = useState(null)


    useEffect(() => {
      //get the current user
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true})
        if(!userInfo) {
          return;
        }
        try {
          const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
          if (userData) {
            setUser(userData.data.getUser);
            // console.log("SETUSER", userData.data.getUser)
          }
        }catch (e) {
          console.log("ERROR",e);
        }
      }
  
      fetchUser()
    }, [])


// console.log("imageprofile", user?.["image"])

    return (
        <View>
            < ProfilePicture image={user?.["image"]} size={50}/>
        </View>
    )
} 




export default LeftContianer;
