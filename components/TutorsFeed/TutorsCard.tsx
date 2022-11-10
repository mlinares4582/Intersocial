import React from 'react';
import { StyleSheet,  Text, View, Dimensions, Image } from 'react-native';
import IconLabel from './IconLabel';


const TutorsCard = ({info}: any) => {
    
    const {name, courses, email, availability, classroom, image, id} = info

    return (
    <View style={styles.container} >
        <View style={styles.cardContainer}>
        <Image
        style={styles.imageStyle}
         source = {image} 
         />
        <View style = {styles.infoStyle}>
            <Text style={styles.titleStyle}>{name}</Text>
            <Text style={styles.categoryStyle}>{courses} </Text>
            <Text style={styles.categoryStyle}>{email}</Text>

                <View style={styles.iconLabelStyle}>
                    <IconLabel name="time-outline" label={availability} color=  "#008000" />
                    <IconLabel name="location-outline" label={classroom} color="#008000"/>
                </View>
            </View>
        </View>
    </View>
    );
};


const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 40;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset, 
        height: 210,
        borderRadius: radius,
        backgroundColor: 'lightgrey',

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 1,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: '800',
        
    },
    categoryStyle: {
        fontWeight: '200',
        fontSize: 12,
        
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },



});





export default TutorsCard;