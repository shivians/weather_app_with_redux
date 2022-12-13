import React from "react";
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { weatherAction } from "../redux/weatherReducer/actions";

function Dashboard() {
  const [search, setSearch] = useState("");

  const dispatch= useDispatch();
  const weather = useSelector((store)=>store.weatherList)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (search) {
      dispatch(weatherAction(search));
      setSearch("")
    } else {
      alert("please type city");
    }
  };
  return (
    <div className="dash-container">
      <div className="row">
        <div className="col-sm-10 col-md-6 mx-auto">
          <div className="main mt-5">
            <form action="">
              <input
                type="text"
                placeholder="Enter city name"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button onClick={submitHandler}> Search</button>
            </form>
            <div className="weather-data mt-5">
              {weather.weatherData.length ? (
                <div className="display-data shadow p-4">
                  <h4 className=" city text-center ">{weather.weatherData[0].name} <sup className="text-primary text-sm" >{weather.weatherData[0].sys.country}</sup></h4>
                  <h4 className=" city text-center ">{weather.weatherData[0].main.temp}°Cel</h4>
                  <h3 className="text-center">
                    Min:{weather.weatherData[0].main.temp_max}°Cel | Max:{weather.weatherData[0].main.temp_min} °Cel
                  </h3>
                  <hr className="city-hr shadow" />
                </div>
              ) : (
                <h1 className="text-center">No data found...</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
