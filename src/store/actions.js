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
  },
  breakRightSide: () => (dispatch, getState) => {
    const array = getState().inputArray
    for (let i = array.length - 1; i >= 0; i--) {
      let j = array[i].length - 1
      while (array[i][j] === constants.WATER) {
        array[i][j] = null
        j--
      }
    }
    dispatch({ type: actionTypes.BREAK_RIGHT_SIDE, array })
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
  
  return transponeArray(resArr)
}

function transponeArray(array) {
  return array[0].map((col, i) => array.map(row => row[i]))
}
