export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMO_TOTAL = 'MEMO_TOTAL';
export const TOTAL_MEMO = 'TOTAL_MEMO';
export const CLEAR_MEMO = 'CLEAR_MEMO';

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}
export const memoToTotal = () => {
  return { type: MEMO_TOTAL };
};

export const totalToMemo = () => {
  return { type: TOTAL_MEMO };
};

export const clearMemo = () => {
  return { type: CLEAR_MEMO };
};