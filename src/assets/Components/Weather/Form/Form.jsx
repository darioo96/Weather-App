import axios from 'axios'
import React from 'react'
import "./Form.scss"

function Form({setWeatherInfo}) {

  const submitForm  = e => {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=4d95c97980c96eb5341c1098aabdc050&lang=es&units=metric`)
    .then(res => {
      const weather = {
        pais: res.data.sys.country,
        ciudad: res.data.name,
        temp: res.data.main.temp,
        temp_max: res.data.main.temp_max,
        temp_min:res.data.main.temp_min,
        humedad:res.data.main.humidity,
        vel_viento: res.data.wind.speed,
        descripcion: res.data.weather[0].description
      }
      setWeatherInfo(weather)
    }).catch(e => {
      setWeatherInfo(e.response.data)
    })
  }

  return (
    <div className='container_form'>
      <form onSubmit={submitForm}>
        <input className='input_ciudad' type="text" placeholder='Nombre de tu Ciudad' autoFocus/>
        <button className='btn_submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Form