import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';


const ParametersDetail = ({hour}) => {

        
      
        return (
            
            <div className="ParameterAll">
                

                <div className="Parameter-all">   
              
                    <div class="image-cloud">
                        <span> <img id="cloud" src={hour.icon}  /></span>
                    </div>
                    </div>

                    <div className="Parameter-all">
                   <div className="Label">Temperature</div>
                    <div className="value">{hour.temp}°C</div>
                </div>

               <div className="Parameter-all">
                   <div className="Label2">Sunrise</div>
                   <div className="value2">{hour.sunrise}</div>
               </div>

               <div className="Parameter-all">
                   <div className="Label3">Sunset</div>
                   <div className="value3">{hour.sunset}</div>
                </div>
               <div className="Parameter-all">
                  <div className="Label4">Coverage</div> 
                  <div className="value4">{hour.cloud_coverage}</div>
                </div>

               <div className="Parameter-all">
                   <div className="Label5">Wind speed</div>
                   <div className="value5">{hour.wind_speed} m/sec</div>
                </div>
                
               <div className="Parameter-all">
                    <div className="Label6">Wind direction</div>
                    <div className="arrow_rotation">
                        <div className="value6" style={{ transform: `rotate(${hour.wind_direction}deg)` }}>↓</div>
                    </div>
                
               </div>

               <div className="Parameter-all">
                    <div className="Label7">Current time in {hour.name}</div>
        <div className="value7">{hour.time}</div>
        </div>

      </div> 
        );
      
    
}

export default ParametersDetail;