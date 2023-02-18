export const quizstart = () => {
  return {
    type: 'QUIZ_START',
  };
};
export const increment = () => {
  return {
    type: 'COUNT_INCRESE',
  };
};
export const arrayincrement = () => {
  return {
    type: 'ARRAY_INCREASE',
  };
};
export const correctarrayincrement = () => {
  return {
    type: 'CORRECT_ARRAY_INCREASE',
  };
};
export const wrongarrayincrement = () => {
  return {
    type: 'WRONG_ARRAY_INCREASE',
  };
};

export const check = (i: number) => {
  return {
    type: 'CHECK',
  };
};
export const correct = () => {
  return {
    type: 'CORRECT',
  };
};
export const wrong = () => {
  return {
    type: 'WRONG',
  };
};

//
export const wrongchance = () => {
  return {
    type: 'WRONG_CHANCE',
  };
};
//

export const buttonmode = () => {
  return {
    type: 'ButtonMode',
  };
};
