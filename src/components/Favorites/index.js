import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FavoritesItem from "./FavoritesItem";
import "./style.css";

class Favorites extends React.Component {
  renderFavorites = () => {
    return this.props.favorites.map(city => {
      return (
        <div key={city.key} className="row">
          <Link to={`/homePage/${city.name}/${city.key}`} >
            <FavoritesItem myKey={city.key} myName={city.name} />
            </Link>
        </div>
      );
    });
  };
  render() {
    return <div className={"favorite"}>{this.renderFavorites()}</div>;
  }
}

const mapStateToProps = state => {
  return { favorites: state.favorites };
};
export default connect(mapStateToProps)(Favorites);
