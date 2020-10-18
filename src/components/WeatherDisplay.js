import React, {Component} from 'react'

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const URL = "http://api.openweathermap.org/data/2.5/weather?lat=" +
          position.coords.latitude + "&lon=" + position.coords.longitude +
          "&appid=" + process.env.REACT_APP_WEATHER_API_KEY + "&units=metric"
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ weatherData: json });
        })
      }
    )
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
        <div className="card mx-auto">
          <div className="card-header">
            <h2>
              {weather.main} in {weatherData.name}
              <img src={iconUrl} alt={weatherData.description} />
            </h2>
          </div>
          <div className="card-body">
            <p>Current: {weatherData.main.temp}°</p>
            <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>          
          </div>
        </div>
    );
  }
}

export default WeatherDisplay