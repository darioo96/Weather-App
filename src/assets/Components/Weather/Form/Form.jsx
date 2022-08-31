import axios from 'axios'
import React from 'react'
import "./Form.scss"

function Form({setWeatherInfo}) {

  const submitForm  = e => {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=4d95c97980c96eb5341c1098aabdc050&lang=es&units=metric`)
    .then(res => {
      setWeatherInfo(res.data)
    }).catch(e => {
      setWeatherInfo(e.response.data)
    })
  }

  return (
    <div className='container_form'>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='Nombre de tu Ciudad' autoFocus/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form