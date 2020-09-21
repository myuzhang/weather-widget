import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './store/reducers';
import App from './App';
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.adapter = httpAdapter

const store = createStore(allReducers)


test('renders learn react link', () => {
  const { getAllByText } = render(
  <Provider store={store} >
    <App />
  </Provider>);
  const elements = getAllByText(/Title/i);
  expect(elements.length).toBeGreaterThan(1);
});

test('get temperature value', async () => {
  const result = await axios(
    `https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      credentials: 'same-origin',
    }
  )
  expect(result.data).not.toBeUndefined()
});