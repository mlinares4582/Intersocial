import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
import { withAuthenticator } from 'aws-amplify-react-native';
import {getUser} from './graphql/queries';
import {createUser} from './graphql/mutations';
import { CreateUserInput } from './API';


 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getImageRandom =() =>{

    return 'https://static.wikia.nocookie.net/characters/images/5/5d/Eren-Jaeger.jpg/revision/latest?cb=20160708134212'

  }

  const saveUserToDB = async (user: CreateUserInput) => {
    // console.log("user", user)
    await API.graphql(graphqlOperation(createUser, {input: user}))

  }
  Amplify.configure(awsconfig);


  useEffect (() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true})
      // console.log("userInfo", userInfo)
      if(userInfo) {
         // Check if user is already exist
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        // console.log("userData", userData)
        if(!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getImageRandom(),
          }
           // If not, create in database
          await saveUserToDB(user);
        }
        else {
         
          console.log("User already exists")
        }
        
      }      
    }

    updateUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);