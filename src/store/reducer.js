const INCREMENT = "INCREMENT";
const INCREMENT_BY = "INCREMENT_BY";
const DECREMENT = "DECREMENT";
const DECREMENT_BY = "DECREMENT_BY";

const initialState = {
  number: 0,
};

export function numberReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case INCREMENT_BY: {
      return {
        ...state,
        number: state.number + state.payload,
      };
    }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    case DECREMENT_BY: {
      return {
        ...state,
        number: state.number - state.payload,
      };
    }
    default:
      return state;
  }
}
