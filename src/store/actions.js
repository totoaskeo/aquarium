import * as actionTypes from './actionTypes'
import constants from '../constants'

export default {
  setInput: inputString => dispatch => {
    dispatch({ type: actionTypes.SET_INPUT_STRING, inputString })
  },
  getInputArray: () => (dispatch, getState) => {
    const inputString = getState().inputString
    const inputArray = inputStringToArray(inputString)
    dispatch({ type: actionTypes.GET_INPUT_ARRAY, inputArray })
  }
}

function inputStringToArray(str) {
  const trimmedString = str.replace(/ /g, '')
  const splittedString = trimmedString.split(',').map(el => parseInt(el))
  if (!splittedString.length) {
    return []
  }
  const pileHeight = Math.max(...splittedString)
  let resArr = []
  for (let j = 0; j < splittedString.length; j++) {
    let heightDiff = pileHeight - splittedString[j]
    let newRow = []
    for (let i = 0; i < heightDiff; i++) {
      newRow.push(constants.WATER)
    }
    for (let i = 0; i < splittedString[j]; i++) {
      newRow.push(constants.STONE)
    }
    resArr.push(newRow)
  }
  resArr = resArr[0].map((col, i) => resArr.map(row => row[i]))
  return resArr
}
