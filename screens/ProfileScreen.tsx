import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import GroupPost from '../GroupData/GroupPost'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
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

      <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Ionicons name="location-outline" color='green' size={20} />
                <Text style={{color: 'grey', marginLeft:20, }}>Toa Baja, Puerto Rico</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="mail-outline" color='green' size={20} />
                <Text style={{color: 'grey', marginLeft:20, }}>jonathanlinares85@gmail.com</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="person-outline" color='green' size={20} />
                <Text style={{color: 'grey', marginLeft:20, }}>Computer Engineer / Software Developer</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="phone-portrait-outline" color='green' size={20} />
                <Text style={{color: 'grey', marginLeft:20, }}>Toa Baja, Puerto Rico</Text>
            </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
            borderRightColor: 'lightgrey',
            borderRightWidth:1,
        }]}>
            <Title>35</Title>
            <Caption>Colleges</Caption>
        </View>
        <View style={styles.infoBox}>
            <Title>10</Title>
            <Caption>Achievements</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="heart-outline" color='#FF4347' size={25} />
                <Text style={styles.menuItemText}>Your favorites</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="bookmarks-outline" color='blue' size={25} />
                <Text style={styles.menuItemText}>Bookmarks</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="share-social-outline" color='green' size={25} />
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="help-circle-outline" color='purple' size={25} />
                <Text style={styles.menuItemText}>Support</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Settings')}>
            <View style={styles.menuItem}>
                <Ionicons name="settings-outline" color='#808080' size={25} />
                <Text style={styles.menuItemText}>Setting</Text>
            </View>
        </TouchableRipple>
      </View>

    </SafeAreaView>
  );
};


export default ProfileScreen;

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
});