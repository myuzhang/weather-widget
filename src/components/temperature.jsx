import React from 'react'
import { useSelector } from 'react-redux'

const Temperature = ({celsiusDegree}) => {
  const temperature = useSelector(state => state.temperature)
  return (
    <p className="big-temp">{temperature ? celsiusDegree.toFixed(0) : (celsiusDegree * 9 / 5 + 32).toFixed(0)}&#176;</p>
  )
}

export default Temperature