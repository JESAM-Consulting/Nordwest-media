import React from "react";

const Opcion = ({ number, opcionname, selected }) => {
  // const [openTab, setOpenTab] = React.useState(1);

  const activar = selected===number;

 
  return (
    <div className="flex justify-center items-center py-2">
      <span>
        <div
          className={
            "relative w-7 h-7  rounded-full flex justify-center items-center text-center p-1 " +
            (activar
              ? "bg-[#4B4B4B]"
              : "border-solid border border-[#4B4B4B]")
          }>
          <span className={"font-roboto "+
          (activar ? "text-[#FFFFFF]" : "text-[#4B4B4B]")}
          >{number}</span>
        </div>
      </span>

      <span className={"ml-3 text-[#4B4B4B] text-[16px]   font-tahoma-bold hidden md:block"}>
        {opcionname}
      </span>

    </div>
  );
};



export default Opcion;
