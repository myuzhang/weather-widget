export const degToCard = deg => {
  const cardinalPoints = ['NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
  const shitfPoint = 11.25
  const range = 22.5

  if (deg < shitfPoint) {
    return 'N'
  }
  return cardinalPoints[(parseInt((deg - shitfPoint)/range))]
}