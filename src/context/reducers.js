import { CLEAR_ALERT, SHOW_ALERT } from './actions';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.type,
        alertText: action.payload.text
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertTexT: ''
      };

    default:
      break;
  }
};
