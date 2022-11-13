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

Amplify.configure(awsconfig)

 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return 'https://i.pinimg.com/550x/bf/a5/3b/bfa53b2488eb224410ac1edfbecb2a34.jpg'
  }

  const saveUserToDB = async (user:CreateUserInput) => {
    console.log('USEEERMMMM',user)
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
          console.log('USEEERMMMM',user)
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