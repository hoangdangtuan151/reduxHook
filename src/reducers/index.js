
import addReducer from "./styleTech"
import {combineReducers} from 'redux'

const initialState = {
    type: addReducer
}

export default combineReducers(initialState)
