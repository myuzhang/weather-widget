const temperatureReducer = (state = true, action) => {
  switch (action.type) {
    case 'celsius':
      return true
    case 'fahrenheit':
      return false
    default:
      return state
  }
}

export default temperatureReducer
