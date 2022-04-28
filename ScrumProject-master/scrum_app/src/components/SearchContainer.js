
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import SearchBar from "./SearchBar";
//import SearchList from "./SearchList";

import '../assets/SearchContainer.css';

const SearchContainer = ({submissionHandlerCity}) => {

        return (
            <div className="container">
                <SearchBar submissionHandlerCity={submissionHandlerCity}/>
                
            </div>
        );
      
    
}

export default SearchContainer;