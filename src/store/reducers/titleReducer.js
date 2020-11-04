const titleReducer = (state = 'Title of Widget', action) => {
  switch (action.type) {
    case 'title':
      return action.payload || 'Title of Widget'
    default:
      return state
  }
}

export default titleReducer