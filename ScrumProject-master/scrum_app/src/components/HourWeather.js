import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';


const HourWeather = ({index, hour_time, hour_index, clickWeatherHour}) => {

        
        return (
            <div>
                <div className={"HourBox_" + {index}}><button id={hour_index} onClick={clickWeatherHour}>{hour_time}</button></div>       
            </div>
        );
      
    
}

export default HourWeather;