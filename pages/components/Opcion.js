import React from "react";

const Opcion = ({ number, opcionname, selected }) => {
  // const [openTab, setOpenTab] = React.useState(1);

  const activar = selected===number;

  console.log("seleccionado "+selected);
  return (
    <div className="flex justify-center items-center pt-2">
      <span>
        <div
          className={
            "relative w-8 h-8  rounded-full flex justify-center items-center text-center p-3 " +
            (activar
              ? "bg-[#4B4B4B]"
              : "border-solid border-2 border-[#4B4B4B]")
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

// border-solid border-2 border-indigo-600

export default Opcion;
