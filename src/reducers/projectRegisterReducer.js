import * as types from '../actions/types';

const initialState = {
  username: '',
  hobbyName: '',
  email: '',
  description: '',
  amount: '',
  endDate: null,
  loading: false,
  error: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.PROJECT_REGISTER_FORM_INPUT_CHANGE:
      return {...state, [action.name]: action.value}
    case types.PROJECT_REGISTER_DATE_CHANGE:
      return {...state, endDate: action.date}
    default:
      return state;
  }
}