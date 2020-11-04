export const turnOn = () => {
  return {
    type: 'windOn',
    payload: true
  }
}

export const turnOff = () => {
  return {
    type: 'windOff',
    payload: false
  }
}