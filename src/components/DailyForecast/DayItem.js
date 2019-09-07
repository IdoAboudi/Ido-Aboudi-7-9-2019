import React from "react";

const DayItem = ({ day, tempMax, tempMin, unit, icon }) => {
  let d = "";
  switch (day) {
    case 0:
      d = "Sun";
      break;
    case 1:
      d = "Mon";
      break;
    case 2:
      d = "Tue";
      break;
    case 3:
      d = "Wed";
      break;
    case 4:
      d = "Thu";
      break;
    case 5:
      d = "Fri";
      break;
    case 6:
      d = "Sat";
      break;

    default:
      break;
  }
  return (
    <div className="card weather-card">
      <div className="card-body pb-3">
        <h4 className="card-title">{d}</h4>
        <i className={"wi icon-accu" + (icon > 9 ? icon : "0" + icon)} />
        <p className="display-1 degree">
          {calcAvgTemp(tempMax, tempMin)}
          {unit}&#176;
        </p>
      </div>
    </div>
  );
};

function calcAvgTemp(max, min) {
  return (max + min) / 2;
}

export default DayItem;
