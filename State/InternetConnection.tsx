import React from 'react';
import { Modal, View, ImageBackground, Pressable, Text } from 'react-native';

function IntConn_modal(props: any) {
  return (
    <Modal visible={props.visibility} animationType='slide' transparent={true}>
      <Pressable
        onPress={props.NoNet}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '95%',
            height: '60%',
          }}
        >
          <ImageBackground
            source={require('../assets/Designs/Oops.png')}
            resizeMode='stretch'
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                height: '50%',
                width: '95%',
                justifyContent: 'flex-end',
              }}
            >
              <Text
                style={{
                  fontSize: 45,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#f7a260',
                  textShadowOffset: { width: 5, height: 5 },
                  textShadowRadius: 15,
                }}
              >
                Check Your Internet Connection!!!
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </Modal>
  );
}
export default IntConn_modal;
