import React, {Component} from 'react'
import WeatherDisplay from './WeatherDisplay'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">React weather app</h1>
        </div>
        <WeatherDisplay />
      </div>
    )
  }
}

export default App