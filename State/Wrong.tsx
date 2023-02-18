import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Modal, View } from 'react-native';

function Wrong(props: any) {
  return (
    <Modal transparent={true} visible={props.visibility}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatedLottieView
          resizeMode='cover'
          style={{
            zIndex: 1,
            width: 320,
            height: 320,
          }}
          source={require('../assets/Animations/Wrong.json')}
          autoPlay
          loop={false}
          onAnimationFinish={props.WrongHandler}
        />
      </View>
    </Modal>
  );
}
export default Wrong;
