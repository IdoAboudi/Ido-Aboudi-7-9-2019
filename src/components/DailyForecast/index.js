import React from "react";
import { connect } from "react-redux";

import DayItem from "./DayItem";
import "./style.css";

class DailyForecast extends React.Component {
  ifExistsInFavorites= key => {
    let exist = false;
    this.props.favorites.forEach( function(favorite){
      if (favorite.key === key) {
        exist = true;
      }
    })
    return exist;
  }

  render() {
    return this.props.location ? (
      <div className="daily-forecast">
        <div className="city-name">
          <h1>{this.props.cityName}</h1>
        </div>
        <div>
          {this.ifExistsInFavorites(this.props.cityKey) ? (
            <button
              className="btn btn-danger"
              onClick={() =>
                this.props.removeFromFavorites({
                  key: this.props.cityKey,
                  name: this.props.cityName
                })
              }
            >
              Remove From Favorites
            </button>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                this.props.addToFavorites({
                  key: this.props.cityKey,
                  name: this.props.cityName
                })
              }
            >
              Add To Favorites
            </button>
          )}
        </div>
        <div className="row">
          {this.props.location.map(day => {
            let currentDay = new Date(day.Date).getDay();
            return (
              <DayItem
                key={day.Date}
                day={currentDay}
                tempMax={day.Temperature.Maximum.Value}
                tempMin={day.Temperature.Minimum.Value}
                unit={day.Temperature.Maximum.Unit}
                icon={day.Day.Icon}
              />
            );
          })}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromFavorites: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyForecast);
