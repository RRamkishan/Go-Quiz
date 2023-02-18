import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';

interface GuideScreen {
  navigation: any;
}

function GuideScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    getData();
  }, []);

  const setData = async () => {
    try {
      await AsyncStorage.setItem('GuideValueKey', 'Entered');
      navigation.replace('Quiz');
    } catch (error) {
      console.log('error');
    }
    // }
  };

  const getData = () => {
    try {
      AsyncStorage.getItem('GuideValueKey').then((value) => {
        if (value != null) {
          navigation.replace('Quiz');
        } else {
          navigation.navigate('Guide');
        }
      });
    } catch (error) {
      alert('error');
    }
  };

  const Start = () => {
    navigation.navigate('Quiz');
  };
  return (
    <Pressable style={styles.container} onPress={Start}>
      <Image style={styles.image} source={require('../assets/Goquiz-Intro.jpg')}></Image>
    </Pressable>
  );
}

export default GuideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
