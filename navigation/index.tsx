/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, AntDesign,Ionicons, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingsTab from '../screens/SettingsTab';
import NotFoundScreen from '../screens/NotFoundScreen';
import FeedTab from '../screens/FeedTab';
import ChatTab from '../screens/ChatTab';
import GroupsTab from '../screens/GroupsTab';
import TutorsTab from '../screens/TutorsTab';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProfilePicture from '../components/ProfilePicture';
import NewPostScreen from '../screens/NewPostScreen';
import NewGroupPostScreen from '../screens/NewGroupPostScreen';
import { useEffect, useState } from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify'
import { getUser } from '../graphql/queries';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<RootTabParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="NewPost" component={NewPostScreen} options={{headerShown:false}}/>
      <Stack.Screen name="NewGroupPost" component={NewGroupPostScreen} options={{headerShown:false}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Settings" component={SettingsTab} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    //get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if(!userInfo) {
        return;
      }
      try {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
        console.log(userData)
        if (userData) {

          setUser(userData.data.getUser)
        }
      }catch (e) {
        console.log(e)
      }
    } 
    fetchUser();

  }, [])

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Feed"
        component={FeedTab}
        options={({ navigation }: RootTabScreenProps<'Feed'>) => ({
  
          tabBarIcon: ({ color }) => <TabBarIcon name="feed" color={color} />,
          headerTitle: () => (
            <Foundation style={{ alignItems: 'center' }} name={"social-skillshare"} size={40}  color={Colors.light.tint}/>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
          
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="setting"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
          headerLeftContainerStyle: {
            marginLeft: 10,
            
            alignContent: 'center',
                  
          },
          headerLeft: () => (
            // <ProfilePicture size={40} image={'instersocial\Photos\logo_inter-removebg-preview.png'}/>
            <ProfilePicture  size={40} image={user?.['image']}/>
          ),
          })}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatTab}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
          headerTitle: () => (
            <Foundation name={"social-skillshare"} size={40}  color={Colors.light.tint}/>
          ),
          headerTitleAlign: 'center',
          
        }}
      />
      <BottomTab.Screen
        name="Groups"
        component={GroupsTab}
        options={{
          title: 'Groups',
          tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
          headerTitle: () => (
            <Foundation name={"social-skillshare"} size={40}  color={Colors.light.tint}/>
          ),
          headerTitleAlign: 'center',

          headerRight: () => (
            <Pressable
            onPress={() => navigation.navigate('Settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="setting"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
                  
          },
          headerLeft: () => (
            <ProfilePicture  size={40} image={user?.['image']}/>
          ),
          





          
        }}
      />
      <BottomTab.Screen
        name="Tutors"
        component={TutorsTab}
        options={{
          title: 'Tutors',
          tabBarIcon: ({ color }) => <TabBarIcon name="id-card" color={color} />,
          headerTitle: () => (
            <Foundation name={"social-skillshare"} size={40}  color={Colors.light.tint}/>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </BottomTab.Navigator>
    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  justifyContent?:string;
  headerTitle?: string;
}) {
  return <FontAwesome size={23} style={{ marginBottom: -3 }} {...props} />;
}

// const FeedTab = createBottomTabNavigator<RootTabParamList>();

//ME QUEDE EN EL MINUTO 36:54 PARA LA PARTE DEL TWEET