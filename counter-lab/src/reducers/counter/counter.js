const initialState = {
  counter: 0,
};

const counter = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT_COUNTER":
      return { counter: state.counter + payload };
    case "DECREMENT_COUNTER":
      return { counter: state.counter - payload };
    case "RESET_COUNTER":
      return { counter: 0 };

    default:
      return state;
  }
};

export default counter;

export const incrementCounter = (payload) => {
  return {
    type: "INCREMENT_COUNTER",
    payload: payload,
  };
};

export const decrementCounter = (payload) => {
  return {
    type: "DECREMENT_COUNTER",
    payload: payload,
  };
};

export const resetCounter = () => {
  return {
    type: "RESET_COUNTER",
  };
};
