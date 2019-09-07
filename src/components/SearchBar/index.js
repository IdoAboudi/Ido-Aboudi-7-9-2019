import React from "react";
import AccuWeather, { KEY } from "../../apis/AccuWeather";
import "./style.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      cityName: "",
      cityKey: "",
      list: [],
      error: ""
    };
  }

  onInputChange = async value => {
    this.setState({ term: value });
    if (value !== "") {
      try {
        const response = await AccuWeather.get(
          '/locations/v1/cities/autocomplete',
          {
            params: {
              apikey: KEY,
              q: value
            }
          }
        );
        if (response.data.length > 0) {
          this.setState({ list: response.data, cityName: response.data[0].LocalizedName });
          this.setState({ cityKey: response.data[0].Key });
        }
      } catch (error) {
        this.setState({ error: error });
      }
    }
  };

  onFormSubmit = (event, key, name) => {
    event.preventDefault();
    if (key) {
      this.props.onSubmit(key, name);
    } else {
      if (this.state.cityKey !== "") {
        this.props.onSubmit(this.state.cityKey, this.state.cityName);
      }
    }
    this.setState({ cityKey: "", term: "", list: [] });
  };

  renderList() {
    return this.state.list.slice(0, 4).map(city => {
      return (
        <li key={city.Key}>
          <div onClick={() => this.selectedCity(city.Key, city.LocalizedName)}>
            {city.LocalizedName}
          </div>
        </li>
      );
    });
  }

  selectedCity = (key, name) => {
    this.setState({ cityKey: key, term: name, list: [] }, function() {
      this.onFormSubmit(window.event, key, name);
    });
  };

  render() {
    return (
      <div>
        <form id={"search-form"} onSubmit={this.onFormSubmit}>
          <div className="input-group input-group-lg col-md-5 mx-auto p-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Search City</span>
            </div>
            <input
              className="form-control"
              type="text"
              value={this.state.term}
              pattern="[a-zA-Z\s]+"
              title="Searching should be done in English letters only"
              onChange={event => this.onInputChange(event.target.value)}
            />
            {this.state.list.length > 0 ? (
              <div className="list">
                <ul>{this.renderList()}</ul>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
