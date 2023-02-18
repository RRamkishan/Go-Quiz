import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { Provider } from 'react-redux';
import { store } from './State/Store/store';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
const styles = StyleSheet.create({});
