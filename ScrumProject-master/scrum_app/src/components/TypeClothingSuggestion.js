 
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
 
 
 
 
 
const TypeClothingSuggestion = ({hour}) => {
 
 
  function getTempClothing(hour) {
   
    if(hour.temp <= -11) {
return<>
      <a href="https://www.asos.com/search/?currentpricerange=0-115&q=gloves&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/gloves.png')} title="Pair of gloves" alt="Pair of gloves"/>
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/scarf.png')} title="A scarf" alt="A scarf"/>
    </a>

    <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20boots&refine=discount_band:4"  target="_blank">
      <img src={require('../assets/pic/clothing/boot.png')} title="A boot" alt="A boot"/> 
      </a>
  
      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20jacket&refine=discount_band:4"  target="_blank">
      <img src={require('../assets/pic/clothing/winterjacket.png')} title="A winter jacket" alt="A winter jacket"/> 
      </a>
  
      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=sweater&refine=discount_band:4"  target="_blank">
      <img src={require('../assets/pic/clothing/sweater.png')} title="A sweater" alt="A sweater"/> 
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=trousers&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/trousers.png')} title="A trouser" alt="A trouser">
      </img>
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20hat&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/winter-hat.png')} title="A winter hat" alt="A winter hat"/> 
        </a>
    
  </>

}
else if (hour.temp >= -10 && hour.temp <= 1){

  return <>
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/scarf.png')} title="A scarf" alt="A scarf">
      </img>
      </a>
 
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=padded%20jacket&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/jacket.png')} title="A jacket" alt="A jacket">
  </img>
  </a>

  
  <a href="https://www.asos.com/search/?currentpricerange=0-325&q=sweater&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/sweater.png')} title="A sweater" alt="A sweater" /> 
    </a>

    <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20hat&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/winter-hat.png')}  title="A winter hat" alt="A winter hat"  /> 
        </a>

        <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20boots&refine=discount_band:4"  target="_blank">
        <img src={require('../assets/pic/clothing/boot.png')} title="A boot" alt="A boot"/> 
        </a>

        <a href="https://www.asos.com/search/?currentpricerange=0-115&q=gloves&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/gloves.png')} title="Pair of gloves" alt="Pair of gloves"/>
        </a>

      </>
      

    


    }
    else if (hour.temp >= 2 && hour.temp <= 18 && hour.wind_speed <= 5 && hour.sky=="Clear"){
   
      return <>
        <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/scarf.png')} title="A scarf" alt="A scarf">
      </img>
      </a>
     
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=padded%20jacket&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/jacket.png')} title="A jacket" alt="A jacket">
  </img>
  </a>

      
  <a href="https://www.asos.com/search/?currentpricerange=0-325&q=sweater&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/sweater.png')} title="A sweater" alt="A sweater" /> 
    </a>

      
          </>
          
   
        
      
      
} else if (hour.temp >= 20 && hour.sky == 'Clear' && hour.wind_speed <= 2) {
   
  return <>
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/t-shirt.png')} title="A t-shirt" alt="A t-shirt" target="_blank">
      </img>
      </a>
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=cap&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/cap.png')} title="A cap" alt="A cap">
      </img>
      </a>
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=shorts&refine=discount_band:4" target="_blank">
                <img src={require('../assets/pic/clothing/shorts.png')} title="Shorts" alt="Shorts">
                </img>
                </a>

   
  
</>
   
  }
}
//the temperature should not recommend wearing a jeansjacket if it is below a certain temperature
   function getWindClothing(hour) {
    if (hour.wind_speed >= 5 && hour.temp >= 15 && hour.temp <= 21) {
      return <>
       <a href="https://www.asos.com/search/?currentpricerange=25-300&q=coat&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/coat.png')} title="A coat" alt="A coat">
      </img>
      </a>
   
      

   <a href="https://www.asos.com/search/?currentpricerange=25-300&q=hoodie&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/hoodie.png')} title="A hoodie" alt="A hoodie">
  </img>
  </a>


  </>
  
       } else if (hour.temp <= 19 && hour.temp >=15 && hour.sky == 'Clear' && hour.wind_speed >= 1 && hour.wind_speed <= 4) {
   
          return <>
        <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/t-shirt.png')} title="A t-shirt" alt="A t-shirt" target="_blank">
      </img>
      </a>
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=cap&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/cap.png')} title="A cap" alt="A cap">
      </img>
      </a>
           
               
          
       <a href="https://www.asos.com/search/?currentpricerange=25-300&q=jeansjacket&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/jeansjacket.png')} title="A jeans jacket" alt="A jeans jacket">
      </img>
      </a>
   
                </>
    }
  }
   
 function getSky(hour) {
   if(hour.sky == 'Clouds' && hour.temp >= 21) {
  return <> 
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
   <img src={require('../assets/pic/clothing/t-shirt.png')} title="A t-shirt" alt="A t-shirt" target="_blank">
     </img>
     </a>
     <a href="https://www.asos.com/search/?currentpricerange=25-300&q=shorts&refine=discount_band:4" target="_blank">
                <img src={require('../assets/pic/clothing/shorts.png')} title="Shorts" alt="Shorts">
                </img>
                </a>
                
     </>
   } else if ( hour.wind_speed <= 5 && hour.sky == 'Clouds' && hour.temp >= 2 && hour.temp <= 20) {
return <>

<a href="https://www.asos.com/search/?currentpricerange=25-300&q=hoodie&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/hoodie.png')} title="A hoodie" alt="A hoodie">
  </img>
  </a>

  <a href="https://www.asos.com/search/?currentpricerange=25-300&q=jeansjacket&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/jeansjacket.png')} title="A jeans jacket" alt="A jeans jacket">
  </img>
  </a>

</>
   
   } else if (hour.sky == "Rain" && hour.temp >=0) {
    return <> 
    <a href="https://www.asos.com/search/?currentpricerange=0-195&q=raincoat&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/raincoat.png')} title="A raincoat" alt="A raincoat" target="_blank">
       </img>
       </a>
       <a href="https://www.asos.com/search/?currentpricerange=0-195&q=umbrella&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/umbrella.png')} title="An umbrella" alt="An umbrella" target="_blank">
       </img>
       </a>

       </>
   } else if (hour.sky == "Clear") {
    return <> 
    <a href="https://www.asos.com/search/?currentpricerange=0-195&q=sunglasses&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/sunglasses.png')} title="Sunglasses" alt="Sunglasses" target="_blank">
       </img>
       </a>
       </>
   }


 }


  return (
 
 
    <div className="TypeClothingSuggestion">
         {getSky(hour)}  {getTempClothing(hour)}  {getWindClothing(hour)} 
      </div>
    );
 
     
   
}
 


export default TypeClothingSuggestion;

