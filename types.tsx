/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NewPost:undefined;
  NewGroupPost:undefined;
  Settings: undefined;
  NotFound: undefined;
  Profile: undefined;
  Chats: undefined;
  Chat: undefined;

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Feed: undefined;
  Chatss: undefined;
  Groups: undefined;
  Tutors: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
}


export type PostType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfLikes?: number,
  numberOfShares?: number,
}



export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;






// NumberOfShares: ReactNode; MICHALE LO TENIA ASI