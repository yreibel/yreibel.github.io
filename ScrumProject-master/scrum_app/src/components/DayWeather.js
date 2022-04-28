
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';

const DayWeather = ({index, day, clickWeatherDay}) => {


      
        return (
         
                <div className={"index_" + index}><button className="day" onClick={clickWeatherDay} id={day}> {day} </button></div>  

          
       

           
        );
      
    
}

export default DayWeather;