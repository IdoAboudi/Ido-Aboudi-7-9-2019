import React from "react";
import AccuWeather, { KEY } from "../../apis/AccuWeather";
import SearchBar from "../SearchBar";
import DailyForecast from "../DailyForecast";

class HomePage extends React.Component {
  state = { forecast: null, cityKey: "", cityName: "", error: "" };

  componentDidMount() {
    const { params: {name, cityKey}} = this.props.match;
    if(cityKey !== undefined && name !== undefined){
      this.onTermSubmit(cityKey, name);
    } 
    else {
      this.onTermSubmit(215854, "Tel Aviv");
    }
  }

  onTermSubmit = async (cityKey, cityName) => {
    try {
      this.setState({ cityKey: cityKey, cityName: cityName });
      const response = await AccuWeather.get(
        "/forecasts/v1/daily/5day/" + cityKey,
        {
          params: {
            apikey: KEY
          }
        }
      );
      this.setState({ forecast: response.data.DailyForecasts });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onTermSubmit} />
        <DailyForecast
          location={this.state.forecast}
          cityKey={this.state.cityKey}
          cityName={this.state.cityName}
        />
      </div>
    );
  }
}

export default HomePage;
