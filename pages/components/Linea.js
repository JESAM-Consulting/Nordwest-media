/* */

import React from "react";

const Linea = ({ selected }) => {
  let ancho = 0;

  switch (selected) {
    case 1:
      ancho = "md:w-[27%] w-[50%]";
      break;

    case 2:
      ancho = "md:w-[48%] w-[68%]";
      break;
    case 3:
      ancho = "md:w-[69%] w-[85%]";
      break;

    default:
        ancho = "md:w-[27%] w-";
        
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
