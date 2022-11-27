import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Setings = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
        <View style={{
          flexDirection: 'row',
          marginTop: 15,
        }}>
            <Avatar.Image
            source={{
                uri: 'https://scontent.fsju2-1.fna.fbcdn.net/v/t39.30808-6/290353426_5442899772424956_4246805057945851870_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tvPIvNyGc8UAX-dmIoN&_nc_ht=scontent.fsju2-1.fna&oh=00_AfDg02o1lqi9bVTCLJ7hlGkIp6-57J36UOMJmbdXkSHEaA&oe=6371F0A3',
            }}
            size={80}
            />
            <View style ={{marginLeft: 20}}>
              <Title style={[styles.title, {
                  marginTop: 15,
                  marginBottom: 5,
              }]}>Jonathan Linares</Title>
              <Caption style={styles.caption}>@jlinares</Caption>
            </View>
          </View>
        </View>
  
       
  
        
  
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                  <Ionicons name="ios-notifications-outline" color='#808080' size={25} />
                  <Text style={styles.menuItemText}>Notifications Settings</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                  <Ionicons name="ios-lock-closed-outline" color='#808080' size={25} />
                  <Text style={styles.menuItemText}>Privacy</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                  <MaterialIcons name="security" color='#808080' size={25} />
                  <Text style={styles.menuItemText}>Security</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                  <MaterialCommunityIcons name="account-circle-outline" color='#808080' size={25} />
                  <Text style={styles.menuItemText}>Account</Text>
              </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Settings')}>
              <View style={styles.menuItem}>
                  <AntDesign name="logout" color='#808080' size={25} />
                  <Text style={styles.menuItemText}>Logout</Text>
              </View>
          </TouchableRipple>
        </View>
  
      </SafeAreaView>
    );
  };

export default Setings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    infoBoxColleagues: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
