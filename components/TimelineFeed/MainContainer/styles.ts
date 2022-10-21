import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    postHeaderName: {
        flexDirection: 'row',
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginRight: 5,
        color: 'gray',
    },
    createdAt: {
        marginRight: 5,
        color: 'gray',
    },

    chevronIcon: {
        color: 'gray', 
        alignItems: 'center',
    },
    
    content: {
        lineHeight: 17 ,
        marginTop: 5,   
    },

    image: {
        width: '100%',
        height: 190,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10,
    }

});

export default styles