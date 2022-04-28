
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import DayWeather from "./DayWeather";

import '../assets/WeatherBox.css';

// import in wrong css
import '../assets/DayWeather.css';

const WeatherBox = ({results, clickWeatherDay}) => {

        
        var arr = [];
        Object.keys(results).forEach(function(key) {
            arr.push(results[key]);
            
        });
        console.log(arr);

        return (
            
        
            <div>
                {arr.map((item, i) => <DayWeather key={i} index={i} day={item.date} clickWeatherDay={clickWeatherDay}
                                           
                                           />
                                   )
                          }
               
            </div>
        );
      

    
}

export default WeatherBox;

/**
 * {arr.map((item, i) => <DayWeather key={i}
                                           
                                />
                        )
               }
 */

/*
{temp, sunrise, sunset, cloud_coverage, wind_speed, wind_direction}

 <DayWeather key={i}
                                            temp={item.temp}
                                            sunrise={item.sunrise}
                                            sunset={item.sunset}
                                            cloud_coverage={item.cloud_coverage}
                                            wind_speed={item.wind_speed}
                                            wind_direction={item.wind_direction}
                                />

*/