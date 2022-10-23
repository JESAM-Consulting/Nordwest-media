/* */

import React from "react";

const Linea = ({ selected }) => {
  let ancho = 0;

  switch (selected) {
    case 1:
      ancho = "w-[27%]";
      break;

    case 2:
      ancho = "w-[48%]";
      break;
    case 3:
      ancho = "w-[69%]";
      break;

    default:
        ancho = "w-[27%]";
        
      break;
  }

  return (
    <div className="relative ">
      
      <div className=" h-2  text-xs flex  shadow-inner">
        

        <div
          className={
            "h-[50%] text-center whitespace-nowrap text-white justify-center bg-[#E20613] " +
            ancho
          }></div>
      </div>
    </div>
  );
};

export default Linea;
