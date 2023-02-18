import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import GuideScreen from './GuideScreen';
import QuizScreen from './QuizScreen';

const stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Guide' component={GuideScreen} options={{ headerShown: false }} />
        <stack.Screen name='Quiz' component={QuizScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;

// const styles = StyleSheet.create({});
