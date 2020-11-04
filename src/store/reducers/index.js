import { combineReducers } from 'redux'
import temperatureReducer from './temperatureReducer'
import titleReducer from './titleReducer'
import windToggleReducer from './windToggleReducer'

export default combineReducers({
  temperature: temperatureReducer,
  title: titleReducer,
  wind: windToggleReducer
})