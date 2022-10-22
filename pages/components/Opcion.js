import React from "react";

const Opcion = ({ number, opcionname, seleccionado }) => {
  // const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex justify-center items-center pt-2" >
      <span>
        <div className="relative w-8 h-8 bg-[#4B4B4B] rounded-full flex justify-center items-center text-center p-3 ">
          <span className="font-roboto">{number}</span>
        </div>
      </span>
      <span className="ml-3 text-[#4B4B4B] text-[0.9rem] font-tahoma-bold">{opcionname} </span>
    </div>
  );
};

export default Opcion;
