import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Dimensions, Image, FlatList } from 'react-native';



import EditScreenInfo from '../components/EditScreenInfo';

import HeaderContainer from '../components/TutorsFeed/HeaderContainer';
import Card from '../components/TutorsFeed/TutorsCard';
import {  View } from '../components/Themed';

export default function TutorsTab() {
return (
    <View style={styles.container}>
        {/* <Card  /> */}
        <StatusBar style="auto" />

        <FlatList data = {tutors} 
        renderItem={({item}) => {
            return <Card info={item} />
        }}
        keyExtractor={(tutors) => tutors.id.toString()}
        showsVerticalScrollIndicator={false}  />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    
    //justifyContent: 'center',
    
},

});


const tutors = [
    {
        name: 'Jonathan Linares',
        courses: 'Calculus I & II',
        email: 'jonathanlinares85@gmail.com',
        availability: '8:00am - 5:00pm',
        classroom: 'Classroom: G123',
        image: require('../assets/images/meChicago3.jpg'),
        id: 1,
    },
    {
        name: 'Michael Linares',
        courses: 'AWS CDK & React Native',
        email: 'mglinares.2419@gmail.com',
        availability: '9:00am - 1:00pm',
        classroom: 'Classroom: F122',
        image: require('../assets/images/michael2.jpg'),
        id: 2,
    },
    {
        name: 'Jose Alicea',
        courses: 'Java',
        email: 'joseraul2015@hotmail.com',
        availability: '9:00am - 6:00pm',
        classroom: 'Classroom: F122',
        image: require('../assets/images/jose2.jpg'),
        id:3
    },{
        name: 'Izahel Vega',
        courses: 'Biology',
        email: 'izahel.vega@gmail.com',
        availability: '9:00am - 1:00pm',
        classroom: 'Classroom: F122',
        image: require('../assets/images/izahel2.jpg'),
        id: 4,
    },
]
