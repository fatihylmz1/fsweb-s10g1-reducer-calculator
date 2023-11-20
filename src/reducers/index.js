import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMO_TOTAL,
  TOTAL_MEMO,
  CLEAR_MEMO,
} from "./../actions";


export const initialState = {
  total: 0,
  operation: "+",
  memory: 0
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });

    case (CLEAR_DISPLAY):
      return ({
        ...state,
        total: 0,
        operation: "+",
        memory: 0,
      });
    case (MEMO_TOTAL):
      return ({
        ...state,
        memory: state.total,
      });

    case (TOTAL_MEMO):
      return ({
        ...state,
        total: state.memory + state.total,
      });

    case (CLEAR_MEMO):
      return ({
        ...state,
        memory: 0,
      });

    default:
      return state;
  }
}

export default reducer;