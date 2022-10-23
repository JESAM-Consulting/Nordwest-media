import React from "react";

const Opcion = ({ number, opcionname, selected }) => {
  // const [openTab, setOpenTab] = React.useState(1);

  const activar = selected===number;

 
  return (
    <div className="flex justify-center items-center pt-3">
      <span>
        <div
          className={
            "relative w-8 h-8  rounded-full flex justify-center items-center text-center p-3 " +
            (activar
              ? "bg-[#4B4B4B]"
              : "border-solid border border-[#4B4B4B]")
          }>
          <span className="font-roboto">{number}</span>
        </div>
      </span>
      <span
        className={
          "ml-3 text-[#4B4B4B] text-[0.9rem] font-tahoma-bold" +
          (activar ? "text-[#FFFFFF]" : "text-[#4B4B4B]")
        }>
        {opcionname}
      </span>
    </div>
  );
};



export default Opcion;
