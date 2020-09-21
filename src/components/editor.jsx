import React from 'react'
import { useDispatch } from 'react-redux'
import { selectTemperature } from '../store/actions/temperatureAction'
import { writeTitle } from '../store/actions/titleAction'
import { turnOff, turnOn } from '../store/actions/windToggleAction'

const Editor = () => {
  const dispatch = useDispatch()

  const setTitleHandler = e => {
    dispatch(writeTitle(e.target.value))
  }

  const setTemperatureHandler = e => {
    dispatch(selectTemperature(e.target.value))
  }

  const setWindHandler = e => {
    if (e.target.value === 'on') {
      dispatch(turnOn())
    } else if (e.target.value === 'off') {
      dispatch(turnOff())
    }
  }

  return (
    <>
      <form className="side" >
        <div>
          <label className="lable-line" htmlFor="title">Title</label>
          <input className="input-text" onChange={setTitleHandler} type="text" id="title" name="title" placeholder="Title of Widget" />
        </div>

        <div>
          <p>Temperature</p>
          <input onClick={setTemperatureHandler} type="radio" id="celsius" name="temp" value="celsius" defaultChecked />
          <label htmlFor="celsius">&#8451;</label>
          <input className="padme" onClick={setTemperatureHandler} type="radio" id="fahrenheit" name="temp" value="fahrenheit" />
          <label htmlFor="fahrenheit">&#8457;</label>
        </div>

        <div>
          <p>Wind</p>
          <input onClick={setWindHandler} type="radio" id="on" name="wind" value="on" defaultChecked />
          <label htmlFor="on">On</label>
          <input className="padme" onClick={setWindHandler} type="radio" id="off" name="wind" value="off" />
          <label htmlFor="off">Off</label>
        </div>
      </form>
    </>
  )
}

export default Editor