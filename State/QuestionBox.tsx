import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const QuestionBox = (props: any) => {
  let [fontsLoaded, error] = useFonts({
    'Berlin-sans': require('../assets/Fonts/BRLNSDB.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '95%',
        }}
      >
        <ImageBackground
          source={require('../assets/Designs/Question-Board.png')}
          resizeMode='stretch'
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Berlin-sans',
                color: '#eee',
              }}
            >
              {props.questionCount}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            marginTop: '6%',
            position: 'absolute',
            alignSelf: 'center',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 50,
              width: 30,
              height: 30,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Berlin-sans',
                color: '#08a108',
                textAlign: 'center',
              }}
            >
              {props.correctCount}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 50,
              width: 30,
              height: 30,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Berlin-sans',
                color: '#ff0000',
                textAlign: 'center',
              }}
            >
              {props.wrongCount}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              height: '90%',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.text}>{props.Givenquestion}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuestionBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '20%',
    width: '100%',
    marginBottom: '10%',
  },
  text: {
    color: '#1b4d1e',
    fontSize: 20,
    fontFamily: 'Berlin-sans',
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
});
