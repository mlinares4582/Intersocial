import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { withAuthenticator } from 'aws-amplify-react-native';
import Navigation from './navigation';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';
import { CreateUserInput, CreateUserMutation } from './API';
// import {getUser} from './src/grapql/queries';


Amplify.configure(awsconfig)

 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return 'https://internados.bayamon.inter.edu/wp-content/uploads/2022/07/Capture-1024x789.jpg'
  }

  const saveUserToDB = async (user:CreateUserInput) => {
    console.log(user)
    await API.graphql(graphqlOperation(createUser, { input: user }))
  }


  useEffect(() => {
    const updateUser = async () => {
      //Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(userInfo);
      if(userInfo) {
        // Check if user already exist in DB
         //If it doesnt create user in DB
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        console.log(userData);
        if(!userData.data.getUser){
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
            name:userInfo.name
          }
          await saveUserToDB(user);
        }else {
          console.log('user already exists')
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

// ME QUEDE EN 25:00