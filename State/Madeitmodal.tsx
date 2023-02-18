import React from 'react';
import { Modal, View, ImageBackground, Pressable } from 'react-native';

function Madeit_modal(props: any) {
  return (
    <Modal visible={props.visibility} animationType='slide' transparent={true}>
      <Pressable
        onPress={props.ok}
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '95%',
            height: '80%',
          }}
        >
          <ImageBackground
            source={require('../assets/Designs/Awesome.png')}
            resizeMode='stretch'
            style={{ height: '80%', width: '95%' }}
          ></ImageBackground>
        </View>
      </Pressable>
    </Modal>
  );
}
export default Madeit_modal;
