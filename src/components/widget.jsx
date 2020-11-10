import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Temperature from './temperature'
import { degToCard } from '../utils'

const initialState = {
  degree: 0,
  city: 'Sydney',
  windSpeed: 0,
  windDirection: 'N',
  weatherImageIcon: '01d',
}

const widgetReducer = (state, action) => {
  if (action.type === 'updateWeather') {
    return {
      degree: action.payload.degree - 273.15, // from Kelvins to Celsius
      city: action.payload.city,
      windSpeed: (action.payload.windSpeed * 1.609).toFixed(0), // from mile/h to km/h
      windDirection: degToCard(action.payload.windDeg), // from wind degree to wind direction
      weatherImageIcon: action.payload.weatherImageIcon,
    }
  }
  return state
}

const Widget = () => {
  const [state, dispatch] = useReducer(widgetReducer, initialState)
  const title = useSelector(state => state.title)
  const wind = useSelector(state => state.wind)

  const featchWeather = async (url = `https://api.openweathermap.org/data/2.5/weather?q=${initialState.city}&appid=9d17ef1b2ff64e1404e9ebca2d6a0018`) => {
    const rawResponse = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
    const result = await rawResponse.json()

    dispatch({type: 'updateWeather', payload: {  
      degree: result.main.temp,
      city: result.name,
      windSpeed: result.wind.speed,
      windDeg: result.wind.deg,
      weatherImageIcon: result.weather[0].icon,}})
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        featchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9d17ef1b2ff64e1404e9ebca2d6a0018`)
      }, err => {
        console.warn(`ERROR(${err.code}): ${err.message}, Sydney as location is used.`);
        featchWeather()
      })
    } else {
      featchWeather()
    }
  }, [])

  return (
    <div className="side">
      <div className="shadow">
        <header>
          <h2 className="title">{title || 'Title of Widget'}</h2>
        </header>
        <div className="weather-content">
          <img src={`http://openweathermap.org/img/wn/${state.weatherImageIcon}@4x.png`} alt="Loading" width="120" height="112" />
          <div className="weather-info">
            <p className="city">{state.city}</p>
            <Temperature celsiusDegree={state.degree} />
            {wind && <p className="wind"><strong>Wind</strong> {state.windDirection} {state.windSpeed}km/h</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget
