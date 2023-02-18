// import { useState } from 'react';

const initialState = {
  array: 0,
  arrayincrement: 0,
  count: 0,
  questionCount: 0,
  correctQuestionCount: 0,
  wrongQuestionCount: 0,
  buttonmode: 'AnswerBox',
  wrongchance: 0,
  nextQuizModal: false,
};

export default (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
        questionCount: state.questionCount + 1,
      };
    case 'QUIZ_START':
      return {
        ...state,
        count: 0,
        arrayincrement: 1,
        array: Math.floor(Math.random() * 100),
        questionCount: 1,
      };
    case 'ARRAY_INCREASE':
      return {
        ...state,
        count: 0,
        arrayincrement: state.arrayincrement + 1,
        questionCount: 1,
        array: Math.floor(Math.random() * 100),
        correctQuestionCount: 0,
        wrongQuestionCount: 0,
        nextQuizModal: false,
      };

    case 'CORRECT_ARRAY_INCREASE':
      return {
        ...state,
        correctQuestionCount: state.correctQuestionCount + 1,
        nextQuizModal: true,
      };

    case 'WRONG_ARRAY_INCREASE':
      return {
        ...state,
        wrongQuestionCount: state.wrongQuestionCount + 1,
        nextQuizModal: true,
      };

    case 'CHECK':
      return {
        ...state,
        questionCount: state.questionCount + 1,
      };
    case 'CORRECT':
      return {
        ...state,
        correctQuestionCount: state.correctQuestionCount + 1,
        questionCount: state.questionCount + 1,
        count: state.count + 1,
      };
    case 'WRONG':
      return {
        ...state,
        wrongQuestionCount: state.wrongQuestionCount + 1,
        questionCount: state.questionCount + 1,
        count: state.count + 1,
      };

    //
    case 'WRONG_CHANCE':
      return {
        ...state,
        wrongchance: state.wrongchance,
        questionCount: state.questionCount,
        count: state.count,
      };
    //

    case 'ButtonMode':
      return {
        ...state,
        buttonmode: 'Rightanswer',
      };
    default:
      return state;
  }
};
