import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

const Widget = () => {
  const [degree, setDegree] = useState(0)
  const [city, setCity] = useState('Sydney')
  const [windSpeed, setWindSpeed] = useState(0)
  const [windDirection, setWindDirection] = useState('NE')
  const [weatherImageIcon, setWeatherImageIcon] = useState('')

  const title = useSelector(state => state.title)
  const temperature = useSelector(state => state.temperature)
  const wind = useSelector(state => state.wind)

  const degToCard = deg => {
    if (deg>11.25 && deg<33.75){
      return "NNE";
    }else if (deg>33.75 && deg<56.25){
      return "ENE";
    }else if (deg>56.25 && deg<78.75){
      return "E";
    }else if (deg>78.75 && deg<101.25){
      return "ESE";
    }else if (deg>101.25 && deg<123.75){
      return "ESE";
    }else if (deg>123.75 && deg<146.25){
      return "SE";
    }else if (deg>146.25 && deg<168.75){
      return "SSE";
    }else if (deg>168.75 && deg<191.25){
      return "S";
    }else if (deg>191.25 && deg<213.75){
      return "SSW";
    }else if (deg>213.75 && deg<236.25){
      return "SW";
    }else if (deg>236.25 && deg<258.75){
      return "WSW";
    }else if (deg>258.75 && deg<281.25){
      return "W";
    }else if (deg>281.25 && deg<303.75){
      return "WNW";
    }else if (deg>303.75 && deg<326.25){
      return "NW";
    }else if (deg>326.25 && deg<348.75){
      return "NNW";
    }else{
      return "N"; 
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const rawResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9d17ef1b2ff64e1404e9ebca2d6a0018`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          })
        const result = await rawResponse.json()
        setDegree(result.main.temp - 273.15)
        setWeatherImageIcon(result.weather[0].icon)
        setCity(result.name)
        setWindSpeed(result.wind.speed)
        setWindDirection(degToCard(result.wind.deg))
      })
    }
  }, [temperature])

  return (
    <div className="side">
      <div className="shadow">
        <header>
          <h2 className="title">{title || 'Title of Widget'}</h2>
        </header>
        <div className="weather-content">
          <img src={`http://openweathermap.org/img/wn/${weatherImageIcon}@4x.png`} alt="Loading" width="120" height="112" />
          <div className="weather-info">
            <p className="city">{city}</p>
            <p className="big-temp">{temperature ? degree.toFixed(0) : (degree * 9 / 5 + 32).toFixed(0)}&#176;</p>
            {wind && <p className="wind"><strong>Wind</strong> {windDirection} {windSpeed}km/h</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget
