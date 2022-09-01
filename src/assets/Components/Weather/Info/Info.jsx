import React from "react";
import "./Info.scss";

function Info({ weatherInfo }) {
  console.log(weatherInfo)
  const respWeather = (weatherInfo.cod === '404') ? 
  [(
    <section className="info_weather">
      <h1 key={weatherInfo.cod}>{weatherInfo.message}</h1>
    </section>
  )]:
  [(
    <section className="info_weather">
      <p className="localizacion"><h3>{weatherInfo.ciudad}, </h3><h4>{weatherInfo.pais}</h4></p>
      <p className="temp">{weatherInfo.temp}</p>
      <picture className="icon">sfd</picture>
    </section>
  )]

  return (
    <>
      {respWeather}
    </>
  );
}

export default Info;
