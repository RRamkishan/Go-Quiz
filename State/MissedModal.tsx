import React from 'react';
import { Modal, View, ImageBackground, Pressable } from 'react-native';

function Missed_modal(props: any) {
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
            height: '50%',
            marginTop: '30%',
          }}
        >
          <ImageBackground
            source={require('../assets/Designs/Oops-Missed.png')}
            resizeMode='stretch'
            style={{ height: '100%', width: '100%' }}
          ></ImageBackground>
        </View>
      </Pressable>
    </Modal>
  );
}
export default Missed_modal;
