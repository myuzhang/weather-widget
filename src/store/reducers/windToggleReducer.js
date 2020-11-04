const windToggleReducer = (state = true, action) => {
  switch (action.type) {
    case 'windOn':
      return action.payload
    case 'windOff':
      return action.payload
    default:
      return state
  }
}

export default windToggleReducer