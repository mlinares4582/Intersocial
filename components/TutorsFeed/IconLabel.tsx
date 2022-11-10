import React from 'react';
import { StyleSheet,  Text, View  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconLabel = ({name, label, color}) => {
    return (
        <View style={styles.container}>
            <Ionicons 
                name={name}  
                type="ionicons" 
                size={12} 
                color={color}
                style={styles.iconStyle}
                />
            <Text style={styles.labelStyle}>{label}</Text>
            
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
    },

    labelStyle:{
        fontSize: 12,
    },
    iconStyle: {
        marginRight: 2,
    }
});
export default IconLabel;


//<ion-icon name="time-outline"></ion-icon>