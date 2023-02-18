import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Modal } from 'react-native';

function Loader(props: any) {
  return (
    <>
      {props.load ? (
        <Modal transparent={true}>
          <AnimatedLottieView
            style={{ zIndex: 1, backgroundColor: 'rgba(100, 100, 100, 0.50)' }}
            source={require('../assets/Animations/loading.json')}
            autoPlay
            loop
          />
        </Modal>
      ) : null}
    </>
  );
}
export default Loader;
