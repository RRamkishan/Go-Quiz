import {
  SafeAreaView,
  Platform,
  ImageBackground,
  Alert,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import { FC, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
// import Modal from 'react-native-modal';

import Quiz1 from '../quizJSON/Quiz1.json';
import Quiz2 from '../quizJSON/Quiz2.json';
import Quiz3 from '../quizJSON/Quiz3.json';
import Quiz4 from '../quizJSON/Quiz4.json';
import Quiz5 from '../quizJSON/Quiz5.json';
import Quiz6 from '../quizJSON/Quiz6.json';
import Quiz7 from '../quizJSON/Quiz7.json';
import Quiz8 from '../quizJSON/Quiz8.json';
import Quiz9 from '../quizJSON/Quiz9.json';
import Quiz10 from '../quizJSON/Quiz10.json';
import Quiz11 from '../quizJSON/Quiz11.json';
import Quiz12 from '../quizJSON/Quiz12.json';
import Quiz13 from '../quizJSON/Quiz13.json';
import Quiz14 from '../quizJSON/Quiz14.json';
import Quiz15 from '../quizJSON/Quiz15.json';
import Quiz16 from '../quizJSON/Quiz16.json';
import Quiz17 from '../quizJSON/Quiz17.json';
import Quiz18 from '../quizJSON/Quiz18.json';
import Quiz19 from '../quizJSON/Quiz19.json';
import Quiz20 from '../quizJSON/Quiz20.json';
import Quiz21 from '../quizJSON/Quiz21.json';
import Quiz22 from '../quizJSON/Quiz22.json';
import Quiz23 from '../quizJSON/Quiz23.json';
import Quiz24 from '../quizJSON/Quiz24.json';
import Quiz25 from '../quizJSON/Quiz25.json';
import Quiz26 from '../quizJSON/Quiz26.json';
import Quiz27 from '../quizJSON/Quiz27.json';
import Quiz28 from '../quizJSON/Quiz28.json';
import Quiz29 from '../quizJSON/Quiz29.json';
import Quiz30 from '../quizJSON/Quiz30.json';
import Quiz31 from '../quizJSON/Quiz31.json';
import Quiz32 from '../quizJSON/Quiz32.json';
import Quiz33 from '../quizJSON/Quiz33.json';
import Quiz34 from '../quizJSON/Quiz34.json';
import Quiz35 from '../quizJSON/Quiz35.json';
import Quiz36 from '../quizJSON/Quiz36.json';
import Quiz37 from '../quizJSON/Quiz37.json';
import Quiz38 from '../quizJSON/Quiz38.json';
import Quiz39 from '../quizJSON/Quiz39.json';
import Quiz40 from '../quizJSON/Quiz40.json';
import Quiz41 from '../quizJSON/Quiz41.json';
import Quiz42 from '../quizJSON/Quiz42.json';
import Quiz43 from '../quizJSON/Quiz43.json';
import Quiz44 from '../quizJSON/Quiz44.json';
import Quiz45 from '../quizJSON/Quiz45.json';
import Quiz46 from '../quizJSON/Quiz46.json';
import Quiz47 from '../quizJSON/Quiz47.json';
import Quiz48 from '../quizJSON/Quiz48.json';
import Quiz49 from '../quizJSON/Quiz49.json';
import Quiz50 from '../quizJSON/Quiz50.json';
import Quiz51 from '../quizJSON/Quiz51.json';
import Quiz52 from '../quizJSON/Quiz52.json';
import Quiz53 from '../quizJSON/Quiz53.json';
import Quiz54 from '../quizJSON/Quiz54.json';
import Quiz55 from '../quizJSON/Quiz55.json';
import Quiz56 from '../quizJSON/Quiz56.json';
import Quiz57 from '../quizJSON/Quiz57.json';
import Quiz58 from '../quizJSON/Quiz58.json';
import Quiz59 from '../quizJSON/Quiz59.json';
import Quiz60 from '../quizJSON/Quiz60.json';
import Quiz61 from '../quizJSON/Quiz61.json';
import Quiz62 from '../quizJSON/Quiz62.json';
import Quiz63 from '../quizJSON/Quiz63.json';
import Quiz64 from '../quizJSON/Quiz64.json';
import Quiz65 from '../quizJSON/Quiz65.json';
import Quiz66 from '../quizJSON/Quiz66.json';
import Quiz67 from '../quizJSON/Quiz67.json';
import Quiz68 from '../quizJSON/Quiz68.json';
import Quiz69 from '../quizJSON/Quiz69.json';
import Quiz70 from '../quizJSON/Quiz70.json';
import Quiz71 from '../quizJSON/Quiz71.json';
import Quiz72 from '../quizJSON/Quiz72.json';
import Quiz73 from '../quizJSON/Quiz73.json';
import Quiz74 from '../quizJSON/Quiz74.json';
import Quiz75 from '../quizJSON/Quiz75.json';
import Quiz76 from '../quizJSON/Quiz76.json';
import Quiz77 from '../quizJSON/Quiz77.json';
import Quiz78 from '../quizJSON/Quiz78.json';
import Quiz79 from '../quizJSON/Quiz79.json';
import Quiz80 from '../quizJSON/Quiz80.json';
import Quiz81 from '../quizJSON/Quiz81.json';
import Quiz82 from '../quizJSON/Quiz82.json';
import Quiz83 from '../quizJSON/Quiz83.json';
import Quiz84 from '../quizJSON/Quiz84.json';
import Quiz85 from '../quizJSON/Quiz85.json';
import Quiz86 from '../quizJSON/Quiz86.json';
import Quiz87 from '../quizJSON/Quiz87.json';
import Quiz88 from '../quizJSON/Quiz88.json';
import Quiz89 from '../quizJSON/Quiz89.json';
import Quiz90 from '../quizJSON/Quiz90.json';
import Quiz91 from '../quizJSON/Quiz91.json';
import Quiz92 from '../quizJSON/Quiz92.json';
import Quiz93 from '../quizJSON/Quiz93.json';
import Quiz94 from '../quizJSON/Quiz94.json';
import Quiz95 from '../quizJSON/Quiz95.json';
import Quiz96 from '../quizJSON/Quiz96.json';
import Quiz97 from '../quizJSON/Quiz97.json';
import Quiz98 from '../quizJSON/Quiz98.json';
import Quiz99 from '../quizJSON/Quiz99.json';
import Quiz100 from '../quizJSON/Quiz100.json';
import React from 'react';
import Rightanswer from '../assets/Designs/Right-Answer-Button.png';
import Wronganswer from '../assets/Designs/Wrong-Answer-Button.png';
import AnswerBox from '../assets/Designs/Answer-Box.png';
import Wrong from '../State/Wrong';
import Missed_modal from '../State/MissedModal';

import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  check,
  correct,
  wrong,
  arrayincrement,
  quizstart,
  buttonmode,
  wrongchance,
  wrongarrayincrement,
  correctarrayincrement, //
} from '../State/Store/actions';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

import { BackHandler } from 'react-native';
import { useCallback } from 'react';
import LottieView from 'lottie-react-native';
import NetInfo from '@react-native-community/netinfo';
import ADmodal from '../State/AdModal';
import IntConn_modal from '../State/InternetConnection';
import Loader from '../State/Loader';
import { AdMobRewarded } from 'expo-ads-admob';

// SplashScreen.preventAutoHideAsync();

export default function QuizScreen(this: any) {
  const dispatch = useDispatch();
  let QuizArray: any = [];
  const count = useSelector((store: { questionCount: any; type: any }) => store.questionCount.count);
  const array = useSelector((store: { questionCount: any; type: any }) => store.questionCount.array);
  const quizset = useSelector((store: { questionCount: any; type: any }) => store.questionCount.arrayincrement);
  if (QuizArray.includes(array)) {
    dispatch(arrayincrement());
  } else {
    QuizArray.push(array);
  }

  const correctCount = useSelector(
    (store: { questionCount: any; type: any }) => store.questionCount.correctQuestionCount
  );
  const wrongCount = useSelector((store: { questionCount: any; type: any }) => store.questionCount.wrongQuestionCount);
  const questionCount = useSelector((store: { questionCount: any; type: any }) => store.questionCount.questionCount);
  const nextquizmodal = useSelector((store: { questionCount: any; type: any }) => store.questionCount.nextQuizModal);

  const [sound, setSound] = useState();
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [nextQuizModal, setNextQuizModal] = useState(false);
  const [QuizmodalEnabled, setQuizmodalEnabled] = useState(false);
  const [QuitmodalEnabled, setQuitmodalEnabled] = useState(false);
  const [button1Mode, setButtonMode1] = useState(AnswerBox);
  const [button2Mode, setButtonMode2] = useState(AnswerBox);
  const [button3Mode, setButtonMode3] = useState(AnswerBox);
  const [button4Mode, setButtonMode4] = useState(AnswerBox);
  const bannerRef = useRef(null);
  const [correct_anime, setcorrect_anime] = useState(false);
  const [wrong_anime, setwrong_anime] = useState(false);
  const [ADmodalEnabled, setADmodalEnabled] = useState(false);
  const [checkInternetConnectionModal, setcheckInternetConnectionModal] = useState(false);
  const [NoadModal, setNoadModal] = useState(false);
  const [loader, setloader] = useState(false);
  // const [clickcount, setclickcount] = useState(0);

  let Quiz = [
    Quiz1,
    Quiz2,
    Quiz3,
    Quiz4,
    Quiz5,
    Quiz6,
    Quiz7,
    Quiz8,
    Quiz9,
    Quiz10,
    Quiz11,
    Quiz12,
    Quiz13,
    Quiz14,
    Quiz15,
    Quiz16,
    Quiz17,
    Quiz18,
    Quiz19,
    Quiz20,
    Quiz21,
    Quiz22,
    Quiz23,
    Quiz24,
    Quiz25,
    Quiz26,
    Quiz27,
    Quiz28,
    Quiz29,
    Quiz30,
    Quiz31,
    Quiz32,
    Quiz33,
    Quiz34,
    Quiz35,
    Quiz36,
    Quiz37,
    Quiz38,
    Quiz39,
    Quiz40,
    Quiz41,
    Quiz42,
    Quiz43,
    Quiz44,
    Quiz45,
    Quiz46,
    Quiz47,
    Quiz48,
    Quiz49,
    Quiz50,
    Quiz51,
    Quiz52,
    Quiz53,
    Quiz54,
    Quiz55,
    Quiz56,
    Quiz57,
    Quiz58,
    Quiz59,
    Quiz60,
    Quiz61,
    Quiz62,
    Quiz63,
    Quiz64,
    Quiz65,
    Quiz66,
    Quiz67,
    Quiz68,
    Quiz69,
    Quiz70,
    Quiz71,
    Quiz72,
    Quiz73,
    Quiz74,
    Quiz75,
    Quiz76,
    Quiz77,
    Quiz78,
    Quiz79,
    Quiz80,
    Quiz81,
    Quiz82,
    Quiz83,
    Quiz84,
    Quiz85,
    Quiz86,
    Quiz87,
    Quiz88,
    Quiz89,
    Quiz90,
    Quiz91,
    Quiz92,
    Quiz93,
    Quiz94,
    Quiz95,
    Quiz96,
    Quiz97,
    Quiz98,
    Quiz99,
    Quiz100,
  ];

  const Givenquestion = Quiz[array][count].question;
  const option1 = Quiz[array][count].options[0];
  const option2 = Quiz[array][count].options[1];
  const option3 = Quiz[array][count].options[2];
  const option4 = Quiz[array][count].options[3];
  const answer = Quiz[array][count].answer_index;
  const [adShown, setAdShown] = useState(false);

  useEffect(() => {
    dispatch(quizstart());
    return function cleanup() {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  // React.useEffect(() => {
  //   return function cleanup() {
  //     AdMobRewarded.removeAllListeners();
  //   };
  // });

  let adUnitId: any = Platform.select({
    ios: 'ca-app-pub-3940256099942544/1712485313',
    android: 'ca-app-pub-3940256099942544/5224354917',
  });

  let rewardAD = async () => {
    await AdMobRewarded.setAdUnitID(adUnitId);
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {}
  };
  // await AdMobRewarded.setAdUnitID(adUnitId);
  // await AdMobRewarded.requestAdAsync();

  AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', (reward) => {
    console.log('Reward');
    setloader(false);
    setAdShown(true);
    setShowCorrectModal(false);
    setADmodalEnabled(false);
  });

  AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {});

  AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => {
    setloader(false);
    if (showCorrectModal == true) {
      const timeout = setTimeout(() => {
        setShowCorrectModal(false);
      }, 1000);
    }
  });

  var length = Quiz.length;

  const nextquiz = () => {
    setNextQuizModal(false);
    dispatch(arrayincrement());
  };

  const QuitmodalYesHandler = () => {
    setQuitmodalEnabled(false);
    const timeout = setTimeout(() => {
      setQuizmodalEnabled(false);
      setQuitmodalEnabled(false);
      BackHandler.exitApp();
    }, 500);
  };

  const backAction = () => {
    setQuitmodalEnabled(true);
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  const quitHandler = () => {
    setQuitmodalEnabled(true);
  };
  const QuitmodalNoHandler = () => {
    setQuitmodalEnabled(false);
  };

  const ADmodalYesHandler = async () => {
    // await AdMobRewarded.showAdAsync();
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        // console.log('count', clickcount);
        setloader(true);
        // setclickcount(0);
        rewardAD();
      } else {
        setcheckInternetConnectionModal(true);
      }
    });
  };

  const NoInternetHandler = () => {
    setcheckInternetConnectionModal(false);
  };

  // const rewardAD = async () => {
  //   await AdMobRewarded.setAdUnitID(adUnitID);
  //   try {
  //     await AdMobRewarded.requestAdAsync();
  //     await AdMobRewarded.showAdAsync();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', (reward) => {
  //   setloader(false);
  //   setADmodalEnabled(false);
  //   setShowCorrectModal(true);
  // });

  // AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {});

  // AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => {
  //   setloader(false);
  //   if (showCorrectModal == true) {
  //     const timeout = setTimeout(() => {
  //       setShowCorrectModal(false);
  //     }, 1000);
  //   }
  // });

  const ADmodalNoHandler = () => {
    setButtonMode1(AnswerBox);
    setButtonMode2(AnswerBox);
    setButtonMode3(AnswerBox);
    setButtonMode4(AnswerBox);

    if (showWrongModal == false && questionCount != 10) {
      console.log('Wrong count Check240498');
      setShowWrongModal(true);
      setADmodalEnabled(false);
      dispatch(wrong());
    }
    if (showWrongModal == false && wrong_anime == true && ADmodalEnabled == true) {
      console.log('Wrong count Check');
      setwrong_anime(false);
      // setShowWrongModal(false);
      setShowWrongModal(true);
      setADmodalEnabled(false);
      // setNoadModal(false);
      if (questionCount == 10) {
        setNextQuizModal(true);
        dispatch(wrongarrayincrement());
      }
    }
    if (questionCount == 10) {
      setNextQuizModal(true);
      setADmodalEnabled(false);
      dispatch(wrongarrayincrement());
    }
  };

  const BackAction = () => {
    setQuitmodalEnabled(true);
    return true;
  };

  const handleIncrement = () => {
    setButtonMode1(AnswerBox);
    setButtonMode2(AnswerBox);
    setButtonMode3(AnswerBox);
    setButtonMode4(AnswerBox);
    setAdShown(false);
    if (showCorrectModal == true && correct_anime == true) {
      setcorrect_anime(false);
      setShowCorrectModal(false);
      console.log('count', count);
      if (questionCount == 10) {
        dispatch(correctarrayincrement());
        setNextQuizModal(true);
      } else {
        dispatch(correct());
      }
    }

    if (showWrongModal == true && wrong_anime == true && ADmodalEnabled == true) {
      console.log('Wrong count Check');
      setwrong_anime(false);
      //setShowWrongModal(false);
      // setADmodalEnabled(false);
      // setNoadModal(false);
      if (questionCount == 10) {
        dispatch(wrongarrayincrement());
        setNextQuizModal(true);
      } else {
        dispatch(wrong());
      }
    }
  };
  const Missed_modalHandler = () => {
    setShowWrongModal(false);
    setADmodalEnabled(false);
    // clickHandler(resultsArr, quizcount, count);
  };

  // const WrongHandler = () => {
  //   console.log('wrong', clickcount);
  //   if (clickcount == 0) {
  //     setADmodalEnabled(true);
  //     setwrong_anime(false);
  //   }
  //   if (clickcount == 1) {
  //     setwrong_anime(false);
  //     const timeout = setTimeout(() => {
  //       setShowWrongModal(fals);
  //     }, 1000);
  //   }
  // };

  const Check = async (i: any) => {
    //start
    if (answer == i) {
      if (answer == 1) {
        setButtonMode1(Rightanswer);
        const timeout1 = setTimeout(() => {
          setButtonMode1(false);
        }, 200);
        const timeout2 = setTimeout(() => {
          setButtonMode1(Rightanswer);
        }, 400);
        const timeout3 = setTimeout(() => {
          setButtonMode1(false);
        }, 600);
        const timeout4 = setTimeout(() => {
          setButtonMode1(Rightanswer);
        }, 800);
        const timeout5 = setTimeout(() => {
          setButtonMode1(false);
        }, 1000);
        const timeout6 = setTimeout(() => {
          setButtonMode1(Rightanswer);
        }, 1200);
      }
      if (answer == 2) {
        setButtonMode2(Rightanswer);
        const timeout1 = setTimeout(() => {
          setButtonMode2(false);
        }, 200);
        const timeout2 = setTimeout(() => {
          setButtonMode2(Rightanswer);
        }, 400);
        const timeout3 = setTimeout(() => {
          setButtonMode2(false);
        }, 600);
        const timeout4 = setTimeout(() => {
          setButtonMode2(Rightanswer);
        }, 800);
        const timeout5 = setTimeout(() => {
          setButtonMode2(false);
        }, 1000);
        const timeout6 = setTimeout(() => {
          setButtonMode2(Rightanswer);
        }, 1200);
      }
      if (answer == 3) {
        setButtonMode3(Rightanswer);
        const timeout1 = setTimeout(() => {
          setButtonMode3(false);
        }, 200);
        const timeout2 = setTimeout(() => {
          setButtonMode3(Rightanswer);
        }, 400);
        const timeout3 = setTimeout(() => {
          setButtonMode3(false);
        }, 600);
        const timeout4 = setTimeout(() => {
          setButtonMode3(Rightanswer);
        }, 800);
        const timeout5 = setTimeout(() => {
          setButtonMode3(false);
        }, 1000);
        const timeout6 = setTimeout(() => {
          setButtonMode3(Rightanswer);
        }, 1200);
      }
      if (answer == 4) {
        setButtonMode4(Rightanswer);
        const timeout1 = setTimeout(() => {
          setButtonMode4(false);
        }, 200);
        const timeout2 = setTimeout(() => {
          setButtonMode4(Rightanswer);
        }, 400);
        const timeout3 = setTimeout(() => {
          setButtonMode4(false);
        }, 600);
        const timeout4 = setTimeout(() => {
          setButtonMode4(Rightanswer);
        }, 800);
        const timeout5 = setTimeout(() => {
          setButtonMode4(false);
        }, 1000);
        const timeout6 = setTimeout(() => {
          setButtonMode4(Rightanswer);
        }, 1200);
      }
      const timer = setTimeout(() => {
        setcorrect_anime(true);
      }, 100);
      const timeout = setTimeout(() => {
        setShowCorrectModal(true);
      }, 1300);

      const { sound } = await Audio.Sound.createAsync(require('../assets/Sounds/Correct.mp3'));
      setSound(i);
      await sound.playAsync();
      //end
    } else {
      if (i == 1) {
        setButtonMode1(Wronganswer);
      }
      if (i == 2) {
        setButtonMode2(Wronganswer);
      }
      if (i == 3) {
        setButtonMode3(Wronganswer);
      }
      if (i == 4) {
        setButtonMode4(Wronganswer);
      }
      if (adShown == true) {
        if (answer == 1) {
          setButtonMode1(Rightanswer);
        }
        if (answer == 2) {
          setButtonMode2(Rightanswer);
        }
        if (answer == 3) {
          setButtonMode3(Rightanswer);
        }
        if (answer == 4) {
          setButtonMode4(Rightanswer);
        }
      }

      const timeout1 = setTimeout(() => {
        setwrong_anime(true);
      }, 2000);

      // setNoadModal(false);
      const timeout = setTimeout(() => {
        // setShowWrongModal(true);
        console.log('adShown', adShown);
        setwrong_anime(false);
        if (adShown == false) {
          setADmodalEnabled(true);
        } else {
          setAdShown(false);
          setButtonMode1(AnswerBox);
          setButtonMode2(AnswerBox);
          setButtonMode3(AnswerBox);
          setButtonMode4(AnswerBox);
          if (adShown == true) {
            if (questionCount == 10) {
              dispatch(wrongarrayincrement());
              setNextQuizModal(true);
            } else {
              setShowWrongModal(true);
              dispatch(wrong());
            }
          }
        }

        // dispatch(wrong());
      }, 3000);

      const { sound } = await Audio.Sound.createAsync(require('../assets/Sounds/Wrong.mp3'));
      setSound(i);
      await sound.playAsync();
      adShown;
    }
  };
  // console.log('TTTT', wrongCount);

  const [fontsLoaded] = useFonts({
    'Berlin-sans': require('../assets/Fonts/BRLNSDB.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  interface pop_up {
    transparent: boolean;
  }
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require('../assets/Designs/Go-Quiz-Screen.png')}
        resizeMode='stretch'
        style={{ flex: 1 }}
      >
        <Text
          style={{
            fontFamily: 'Berlin-sans',
            color: 'white',
            textAlign: 'center',
            top: '5%',
            fontSize: 40,
          }}
        >
          Quiz {quizset}
        </Text>
        <View style={{ flex: 0.5, padding: '2%', marginTop: '10%', height: '100%', maxHeight: '80%' }}>
          <ImageBackground
            source={require('../assets/Designs/Question-Board.png')}
            resizeMode='stretch'
            style={{
              flex: 1,
              maxHeight: '60%',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              top: '15%',
            }}
          >
            <View
              style={{
                flex: 1,
                top: '-3%',
                minHeight: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* test */}
              <Text
                style={{
                  flex: 0.5,
                  fontSize: 22,
                  fontFamily: 'Berlin-sans',
                  color: '#fff',
                  textAlign: 'center',
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                }}
              >
                {questionCount}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                display: 'flex',
                width: '98%',
                top: '-5%',
                // paddingLeft: 0,
                // paddingBottom: '5%',
              }}
            >
              <View
                style={{
                  backgroundColor: '#eee',
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                  top: '0%',
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
                  {wrongCount}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#eee',
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                  top: '0%',
                  display: 'flex',
                  alignContent: 'center',
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
                  {correctCount}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                top: '-3%',
                height: '100%',
                maxHeight: '100%',
                // borderWidth: 3,
                // borderColor: '#000',
                minHeight: '50%',
              }}
            >
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontFamily: 'Berlin-sans',
                  color: '#1b4d1e',
                  fontSize: 20,
                  height: '100%',
                  maxWidth: '80%',
                  maxHeight: '100%',
                  minHeight: '50%',
                }}
              >
                {Givenquestion}
              </Text>
            </View>
            {/* QuestionView */}

            {/* test start */}
            {/* test end */}
          </ImageBackground>
          <View style={{ flex: 1, top: '20%' }}>
            <TouchableOpacity onPress={() => Check(1)} style={{ height: '100%', top: '8%', maxHeight: '30%' }}>
              <ImageBackground
                source={button1Mode}
                resizeMode='stretch'
                style={{
                  flex: 1,
                  height: '100%',
                  minHeight: '45%',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.ques}>{option1}</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Check(2)} style={{ height: '100%', top: '38%', maxHeight: '30%' }}>
              <ImageBackground
                source={button2Mode}
                resizeMode='stretch'
                style={{
                  flex: 1,
                  height: '100%',
                  minHeight: '50%',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.ques}>{option2}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Check(3)} style={{ height: '100%', top: '68%', maxHeight: '30%' }}>
              <ImageBackground
                // source={require('../assets/Designs/Answer-Box.png')}
                source={button3Mode}
                resizeMode='stretch'
                style={{
                  flex: 1,
                  height: '100%',
                  minHeight: '50%',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.ques}>{option3}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Check(4)} style={{ height: '100%', top: '98%', maxHeight: '30%' }}>
              <ImageBackground
                source={button4Mode}
                resizeMode='stretch'
                style={{
                  flex: 1,
                  height: '100%',
                  minHeight: '50%',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.ques}>{option4}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Modal visible={showCorrectModal} transparent={true}>
        <Pressable
          onPress={() => handleIncrement()}
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
              marginTop: '35%',
            }}
          >
            <ImageBackground
              source={require('../assets/Designs/Awesome.png')}
              resizeMode='stretch'
              style={{ height: '100%', width: '100%' }}
            ></ImageBackground>
          </View>
        </Pressable>
      </Modal>
      <Missed_modal visibility={showWrongModal} ok={Missed_modalHandler} />
      <Modal visible={nextquizmodal} animationType='slide' transparent={true}>
        <View style={styles.modal}>
          <View
            style={{
              width: '40%',
              position: 'absolute',
              justifyContent: 'center',
              top: '32%',
              height: '20%',
              zIndex: 1,
            }}
          >
            <View>
              <Text style={{ fontFamily: 'Berlin-sans', fontSize: 40, color: '#1b4d1e' }}>{correctCount}</Text>
            </View>
          </View>
          <ImageBackground
            source={require('../assets/Designs/Quiz-Completion-Bg.png')}
            resizeMode='stretch'
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                width: '100%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: '50%',
                  height: '20%',
                }}
              >
                <TouchableOpacity onPress={() => nextquiz()}>
                  <ImageBackground
                    source={require('../assets/Designs/Next-Quiz-Button.png')}
                    resizeMode='stretch'
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '70%',
                  marginVertical: '7%',
                }}
              >
                <View
                  style={{
                    width: 75,
                    height: 75,
                  }}
                >
                  <ImageBackground
                    source={require('../assets/Designs/Share-Button.png')}
                    resizeMode='stretch'
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  ></ImageBackground>
                </View>
                <View
                  style={{
                    width: 75,
                    height: 75,
                  }}
                >
                  <ImageBackground
                    source={require('../assets/Designs/Rate-Us-Button.png')}
                    resizeMode='stretch'
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  ></ImageBackground>
                </View>
              </View>
              <View
                style={{
                  width: '45%',
                  height: '15%',
                }}
              >
                <TouchableOpacity onPress={() => quitHandler()}>
                  <ImageBackground
                    source={require('../assets/Designs/Quit-Button.png')}
                    resizeMode='stretch'
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>
      {/* Quit box */}
      <Modal visible={QuitmodalEnabled} animationType='slide' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* <View style={styles.ADpopup}> */}
          <View style={styles.quitbox}>
            <ImageBackground
              source={require('../assets/Designs/quit/Quit-Screen-Bg.png')}
              resizeMode='stretch'
              style={{
                top: '20%',
                height: '70%',
                width: '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  top: '10%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: '100%',
                  height: '40%',
                }}
              >
                <TouchableOpacity onPress={QuitmodalYesHandler} style={{ height: '35%', width: '30%' }}>
                  <ImageBackground
                    source={require('../assets/Designs/quit/Yes-Button.png')}
                    resizeMode='stretch'
                    style={{ height: '100%', width: '100%' }}
                  ></ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={QuitmodalNoHandler} style={{ height: '35%', width: '30%' }}>
                  <ImageBackground
                    source={require('../assets/Designs/quit/No-button.png')}
                    resizeMode='stretch'
                    style={{ height: '100%', width: '100%' }}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          {/* </View> */}
        </View>
      </Modal>
      {/* Quit box */}
      {/* correct_anime */}
      <Modal visible={correct_anime} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LottieView
            resizeMode='cover'
            style={{
              zIndex: 1,
              width: 300,
              height: 300,
            }}
            source={require('../assets/Animations/Correct.json')}
            autoPlay
            loop={false}
          />
        </View>
      </Modal>
      {/* correct_anime */}
      {/* wrong_anime */}
      <Wrong visibility={wrong_anime} />
      {/* WrongHandler={WrongHandler} */}
      {/* wrong_anime */}
      {/* Wrong Chance */}
      <Loader load={loader} />
      <ADmodal visibility={ADmodalEnabled} Yes={ADmodalYesHandler} No={ADmodalNoHandler} />
      <IntConn_modal visibility={checkInternetConnectionModal} NoNet={NoInternetHandler} />
      {/* Wrong Chance */}
      {/*No int ad */}
      <Modal visible={NoadModal} animationType='slide' transparent={true}>
        <Pressable
          // onPress={NoInternetHandler}
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
      {/* ad */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ques: {
    flex: 0.5,
    height: '100%',
    textAlign: 'center',
    color: '#1b4d1e',
    fontSize: 18,
    fontFamily: 'Berlin-sans',
    marginTop: '5%',
  },
  ques_show: {
    flex: 0.5,
    textAlign: 'center',
    fontFamily: 'Berlin-sans',
    color: '#1b4d1e',
    fontSize: 24,
    top: '5%',
    height: '100%',
    maxHeight: '50%',
    maxWidth: '90%',
  },
  countchecks: {
    position: 'absolute',
    alignItems: 'center',
    height: '20%',
    width: '100%',
    // marginBottom: '10%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
  },
  text: {
    fontSize: 40,
    color: '#1b4d1e',
    // fontFamily: 'DancingScript-Regular',
  },
  quitbox: {
    // marginTop: '10%',
    width: '100%',
    height: '100%',
  },
  ADpopup: {
    marginTop: '10%',
    width: '95%',
    height: '40%',
  },
});
