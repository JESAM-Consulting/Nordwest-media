import React from "react";
import Image from 'next/image';


const AreaInferiorIzquierda = ({texto1, texto2}) => {
    return (
      <div
        className="bg-[#EFEFEF]  grid  grid-cols-[9%_80%]  lg:w-[78vw] w-[100vw]
      lg:grid-rows-[3vh_14vh] grid-rows-[3vh_10vh]  pl-3 lg:pt-3 leading-[0.95rem]">
        <img
          src="/img/entypo_help-with-circle.svg"
          alt="NordWest"
          className=" justify-self-end pt-1 self-start lg:w-[2.3vw] w-[7vw]"
          
        />
  
        <div className=" col-start-2 text-[#8C8C8C] self-center font-tahoma text-[14px] ">
          {/* Warum fragen wir das?  */}
          
          {texto1}
        </div>
  
        <div className="text-[#AFA9A9] col-start-2 self-start font-tahoma lg:w-[43vw] w-[80vw] text-[10px] pt-1 ">
          {/* Wir bieten einen krisensicheren Job, in dem sich unsere
          Mit­arbei­ter*innen individuell entwickeln können. Mit flachen
          Hierarchien und Kommunikation auf Augenhöhe. */}
          {texto2}
        </div>
      </div>
    );
  };

  
  export default AreaInferiorIzquierda;