import React from "react";
import Slider from "react-slick";

import Poster from "../poster/poster.component";

import settings from "../../config/postercarousalconfig";

import PremierImages from "../../config/tempposter.config";

  const Premier =()=>{

  

  
    return (
        <>
        <div className="felx flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm ">Brand new released every Friday</p>
        </div>
        


        <Slider { ...settings}>

          {PremierImages.map((image)=>(
              <Poster{ ...image} isDark/>
              )
              )}
        </Slider>
             
        </>
    );
 };

 export default Premier;