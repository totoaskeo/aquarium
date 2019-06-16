import * as actionTypes from './actionTypes'

const initialState = { inputString: '', inputArray: [] }

export default function rootReducer (state, action) {
  state = state || initialState

  switch (action.type) {
    case actionTypes.SET_INPUT_STRING:
      return { ...state, inputString: action.inputString }
    case actionTypes.GET_INPUT_ARRAY:
      return { ...state, inputArray: action.inputArray }
    default:
      return state
  }
}
