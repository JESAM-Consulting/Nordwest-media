
import React from "react";

const Number = ({number}) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
   <div className="relative w-12 h-12 bg-[#4B4B4B] rounded-full flex justify-center items-center text-center p-5 shadow-xl">
   <span className="absolute text-3xl left-0 top-0 text-purple-800">                    
   </span>
   <span className="">{number}</span>
 </div>
 </>
    );
}


export default Number;
