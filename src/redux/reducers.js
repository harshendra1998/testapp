COUNTER_CHANGE = 'COUNTER_CHANGE';

export function changeCount(count) {
  return {
    type: 'COUNTER_CHANGE',
    payload: count,
  };
}

const initialState = {};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_CHANGE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
