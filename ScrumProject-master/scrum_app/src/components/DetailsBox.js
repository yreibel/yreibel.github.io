 
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
 
import '../assets/DayWeather.css';
import ParametersDetail from "./ParametersDetail";
import HourBox from './HourBox';
import TypeClothingSuggestion from "./TypeClothingSuggestion";
 
 
const DetailsBox = ({results}) => {
 
        const [listHour,setListHour]=useState([])
 
        let clickWeatherHour = (e) =>{
            console.log(e.currentTarget.id);
            setListHour(results[e.currentTarget.id]);
            console.log(results[e.currentTarget.id])
        }
   
        return (
            <div className="DetailsBox">
                <div> <HourBox results={results} clickWeatherHour={clickWeatherHour}> </HourBox></div>
                <div> <ParametersDetail hour={listHour}> </ParametersDetail></div>
                <div> <TypeClothingSuggestion hour={listHour}> </TypeClothingSuggestion></div>
          </div>
        );
     
   
}
 
export default DetailsBox;
