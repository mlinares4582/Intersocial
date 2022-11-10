import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

export type TutorsParams = {
    label: string
}

const HeaderContainer = ({label}: TutorsParams) => {
    console.log(label);

    return ( 
    <View style = {styles.container}> 
        <Text style={styles.labelStyle}>{label}</Text>
    </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container:{
        width: deviceWidth - 15,
        height: 50,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 27,
        fontWeight: '700',
    },
});





export default HeaderContainer;