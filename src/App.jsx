import { useState } from 'react';
import "./App.scss"
import Form from "./assets/Components/Weather/Form/Form"
import Info from "./assets/Components/Weather/Info/Info"


function App() {
  
  const [weatherInfo, setWeatherInfo] = useState([])

  return (
    <div className="App">
      <h1 className='title'>Weather App</h1>
      <Form setWeatherInfo = {setWeatherInfo}/>
      <Info weatherInfo={weatherInfo}/>
    </div>
  )
}

export default App
