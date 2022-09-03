import "./Info.scss";

function Info({ weatherInfo }) {
  console.log(weatherInfo)
  const respWeather = () => {
    if(weatherInfo.cod == 200){
      return (
        <section className="info_weather">

          <div className="temp" >
            <picture style={{backgroundImage: `url(./src/assets/Media/Icons/${weatherInfo.icon}.svg)`}}></picture>
            <p className="info_temp">{Math.round(weatherInfo.temp)}ºc</p>
            <p className="descripcion">{weatherInfo.descripcion}</p>
          </div>

          <div className="info">
            <h4 className="data">{weatherInfo.ciudad}, {weatherInfo.pais}</h4>
            <h4 className="data">Max: {Math.round(weatherInfo.temp_max)}ºc / Min: {Math.round(weatherInfo.temp_min)}ºc</h4>
            <h4 className="data">Humedad: {weatherInfo.humedad}%</h4>
            <h4 className="data">Viento: {weatherInfo.vel_viento} Km/h</h4>

          </div>

        </section>
      );
    } else {
      return (
        <section className="info_weather">
          <h1>{weatherInfo.message}</h1>
          <picture className="error_404"></picture>
        </section>
      );
    }
  };

  return respWeather()
}

export default Info;
