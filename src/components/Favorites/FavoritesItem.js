import React from "react";
import AccuWeather, { KEY } from "../../apis/AccuWeather";

class FavoritesItem extends React.Component {
  state = { currentWeather: [], temp: "" };

  componentDidMount() {
    this.renderItem();
  }

  renderItem = async () => {
    const response = await AccuWeather.get(
      "/currentconditions/v1/" + this.props.myKey,
      {
        params: {
          apikey: KEY
        }
      }
    );
    console.log(response.data[0]);
    console.log(response.data[0].Temperature.Metric.Value);
    this.setState({
      currentWeather: response.data[0],
      temp: response.data[0].Temperature.Metric.Value
    });
  };
  render() {
    const iconNum = this.state.currentWeather.WeatherIcon;
    return (
      <div className="card weather-card">
        <div className="card-body pb-3">
          <h4 className="card-title">{this.props.myName}</h4>
          <p className="card-text">{this.state.currentWeather.WeatherText}</p>
          <i
            className={"wi icon-accu" + (iconNum > 9 ? iconNum : "0" + iconNum)}
          />
          <p className="display-1 degree">{this.state.temp}&#176;</p>
        </div>
      </div>
    );
  }
}
export default FavoritesItem;
