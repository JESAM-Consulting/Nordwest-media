import React from "react";

const Opcion2 = ({ number, opcionname, activar }) => {
   

 
  return (
    <div className="flex  items-center py-2 px-2 ">
      <span>
        <div
          className={
            "relative w-7 h-7  rounded-full flex justify-center items-center text-center p-1 " +
            (activar
              ? "bg-[#E20613]"
              : "border-solid border bg-[#FFFFFF] border-[#E20613]")
          }>
          <span className={"font-roboto text-[0.8rem] "+(activar ? "text-[#FFFFFF]" : "text-[#4B4B4B]")}>{number}</span>
        </div>
      </span>
      {/* text-[0.8rem] */}
      <span
        className={
          "ml-1 text-[#4B4B4B] text-[12px]  font-tahoma-bold"         
        }>
        {opcionname}
      </span>
    </div>
  );
};



export default Opcion2;
