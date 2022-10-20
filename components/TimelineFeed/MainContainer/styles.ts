import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postHeaderName: {
        flexDirection: 'row',
    },
    name: {
        marginHorizontal: 5,
        fontWeight: 'bold',
    },
    username: {
        marginHorizontal: 5,
        color: 'gray',
    },
    createdAt: {
        marginHorizontal: 5,
        color: 'gray',
    },

    chevronIcon: {
        color: 'gray',
        
    }

});

export default styles