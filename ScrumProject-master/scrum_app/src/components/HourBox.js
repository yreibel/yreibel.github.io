import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/HourBox.css';
import '../assets/DayWeather.css';
import HourWeather from "./HourWeather";


const HourBox = ({results, clickWeatherHour}) => {

        var arr = [];
        Object.keys(results).forEach(function(key) {
            arr.push(results[key]);
            
        });
        console.log(arr);


        return (
          <div className="HourBox">

  
              <div>
                {arr.map((item, i) => <HourWeather key={i} index={i} hour_time={item.hour_time} hour_index={item.hour_index} clickWeatherHour={clickWeatherHour}
                                           
                                           />
                                   )
                          } 
              </div>

      
          </div>
        );
      
    
}

export default HourBox;