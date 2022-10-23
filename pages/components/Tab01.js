import React from "react";

const Tab01 = () => {
  return (
    <div className="grid grid-cols-[70%_30%] grid-rows-[13vh_52vh_20vh]  ">
       {/* ---------------------- Area Superior izquierda ----------------------     */}
       <div className="pl-10 pt-2  col-start-1 row-start-1 ">
        <div>
          <span className="underline underline-offset-4 font-tahoma-bold text-[0.8rem]">
            Jetzt Teil von
          </span>
          <span className="font-tahoma-bold text-[0.8rem]">
            der nwm werden!
          </span>
        </div>
        <div className="font-tahoma text-[0.85rem] text-[0.65rem] text-[#AFA9A9] w-[40%]">
          Wir bieten einen krisensicheren Job, in dem sich unsere
          Mitarbeiter*innen individuell entwickeln können. Mit flachen
          Hierarchien und Kommunikation auf Augenhöhe.
        </div>
      </div>


     {/* ---------------------- Area Central izquierda----------------------     */}

     <div className="ml-24 bg-[#EFEFEF] w-[60%] h-[35vh]  col-start-1 row-start-2 self-center p-5">
        AAA
      </div>


{/* ---------------------- Area Inferior izquierda ----------------------     */}
      <div className=" col-start-1 row-start-3 bg-[#EFEFEF]  grid  grid-cols-[9%_80%]   grid-rows-[3vh_10vh] pt-5 flex  ">
        <img
          src="/img/entypo_help-with-circle.svg"
          alt="NordWest"
          className=" justify-self-end  self-center w-[2.3vw]"
        />
        <div className=" col-start-2 text-[#8C8C8C] self-center font-tahoma text-[1.3rem] ">
          Über uns
        </div>

        <div className="text-[#AFA9A9] col-start-2 self-start font-tahoma w-[55vw] text-[0.65rem] pt-2 ">
          Als Tochtergesellschaft der Sparkasse Bremen AG ist die nwm
          nordwest-media für den Kundenservice zuständig. Unsere motivierten
          Mitarbeiter*innen helfen, beraten und lösen Probleme. Indem sie per
          Telefon - oder auf anderen Kommunikationskanälen - mit den Kund*innen
          der Sparkasse Bremen sprechen. Und zwar so individuell wie möglich.
          Denn unser Ziel ist es, Menschen stets freundlich und kompetent zu
          unterstützen.
        </div>
      </div>
        {/* Imagen de la derecha */}

        <div className=" flex justify-end  col-start-2 row-start-1">
        <img
          src="/img/girl-large.png"
          alt="NordWest"
          className="imagen  h-[86vh]"
        />
      </div>
    </div>
  );
};

export default Tab01;
