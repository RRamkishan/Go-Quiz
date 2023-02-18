import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function ADmodal(props: any) {
  return (
    <Modal visible={props.visibility} animationType='slide' transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.ADpopup}>
          <ImageBackground
            source={require('../assets/Designs/TakeAChance-Window.png')}
            resizeMode='stretch'
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={props.Yes} style={{ height: '45%', width: '45%' }}>
                <ImageBackground
                  source={require('../assets/Designs/Yes-Button.png')}
                  resizeMode='stretch'
                  style={{ height: '100%', width: '100%' }}
                ></ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity onPress={props.No} style={{ height: '45%', width: '25%' }}>
                <ImageBackground
                  source={require('../assets/Designs/No-Button.png')}
                  resizeMode='stretch'
                  style={{ height: '100%', width: '100%' }}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
}
export default ADmodal;

const styles = StyleSheet.create({
  ADpopup: {
    marginTop: '10%',
    width: '95%',
    height: '50%',
  },
});
