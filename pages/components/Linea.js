/* */

import React from "react";

const Linea = ({ selected }) => {
  let ancho = 0;

  switch (selected) {
    case 1:
      ancho = "w-[32%]";
      break;

    case 2:
      ancho = "w-[57%]";
      break;
    case 3:
      ancho = "w-[82%]";
      break;

    default:
        ancho = "w-[32%]";
        
      break;
  }

  return (
    <div className="relative pt-1">
      {/* <div className="overflow-hidden h-2 mb-4 text-xs flex rounded  shadow-inner"> */}
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded shadow-inner">
        

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
