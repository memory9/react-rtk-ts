import { combineReducers } from 'redux'
import mine from './slices/mine'

const reducers = {
  mine,
}

export default combineReducers(reducers)
