import React from "react";
import Opcion2 from "./Opcion2";

const AreaSuperiorIzquierda = () => {
  return (
    <>
      <div>
        <span className="underline underline-offset-4 font-tahoma-bold text-[0.9rem]">
          Jetzt Teil von
        </span>
        <span className="font-tahoma-bold text-[0.9rem]">der nwm werden!</span>
      </div>
      <div className="font-tahoma text-[0.85rem] text-[0.65rem] text-[#AFA9A9] w-[100%] lg:w-[40%] pt-2">
        Wir bieten einen krisensicheren Job, in dem sich unsere
        Mitarbeiter*innen individuell entwickeln können. Mit flachen Hierarchien
        und Kommunikation auf Augenhöhe.
      </div>
    </>
  );
};

const AreaCentralIzquierda = (props) => {
  return (
    <div className="">
      <div className="tahoma-font-bold text-[#4B4B4B] lg:text-[2.2rem] text-[1.5rem] font-extrabold text-center lg:text-start lg:leading-[2.7rem] leading-[1.7rem] ">
        In nur 3 Schritten <br /> zu Deinem neuen Job
      </div>

      <div className="mt-10  text-center lg:text-start">
        <button className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto">
          Jetzt Bewerbung starten
        </button>
      </div>
      {/* TODO: centrar correctamente */}

      {/* lg:justify-start */}
      <div className="lg:flex lg:flex-row    lg:w-[100%] w-[40%]  flex flex-col ml-[28vw] lg:ml-[0vw]   ">
        <a
          className= "text-xs font-bold    cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(1);
            props.updateOpenTab(1);
          }}>
          <Opcion2 number={1} opcionname="Kennenlernen" activar={true}></Opcion2>
        </a>

        <a className="text-xs font-bold    cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(2);
            props.updateOpenTab(2);
          }}>
          <Opcion2 number={2} opcionname="Über Dich" activar={false}></Opcion2>
        </a>

        <a className="text-xs font-bold   cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(3);
            props.updateOpenTab(3);
          }}>
          <Opcion2 number={3} opcionname="Durchstarten" activar={false}></Opcion2>
        </a>
      </div>
    </div>
  );
};

const AreaInferiorIzquierda = () => {
  return (
    <div
      className="bg-[#EFEFEF]  grid  grid-cols-[9%_80%]  lg:w-[78vw] w-[100vw]
    grid-rows-[3vh_14vh] h-100 pt-5 pl-3  leading-[0.95rem]">
      <img
        src="/img/entypo_help-with-circle.svg"
        alt="NordWest"
        className=" justify-self-end  self-center lg:w-[2.3vw] w-[15vw]"
      />
      <div className=" col-start-2 text-[#8C8C8C] self-center font-tahoma text-[1rem] ">
        Über uns
      </div>

      <div className="text-[#AFA9A9] col-start-2 self-start font-tahoma lg:w-[43vw] w-[80vw] text-[0.7rem] pt-1 ">
        Als Tochtergesellschaft der Sparkasse Bremen AG ist die nwm
        nordwest-media für den Kundenservice zuständig. Unsere motivierten
        Mitarbeiter*innen helfen, beraten und lösen Probleme. Indem sie per
        Telefon - oder auf anderen Kommunikationskanälen - mit den Kund*innen
        der Sparkasse Bremen sprechen. Und zwar so individuell wie möglich. Denn
        unser Ziel ist es, Menschen stets freundlich und kompetent zu
        unterstützen.
      </div>
    </div>
  );
};

const ImagenDerecha1 = () => {
  return (
    <>
      <img src="/img/girl-large.png" alt="NordWest" className="  h-[89vh] " />
    </>
  );
};

const ImagenDerecha2 = () => {
  return (
    <>
      <img src="/img/girl-low.png" alt="NordWest" className="  w-[100vw] " />
    </>
  );
};

const Tab01 = (props) => {
  return (
    <>
      {/*  PAntalla grande xl --> ancho > 1280 */}

      <div className="xl:grid xl:grid-cols-[66%_34%] xl:grid-rows-[6vh_60vh_18vh]  xl:w-full hidden    ">
        {/* ---------------------- Area Superior izquierda ----------------------     */}
        <div className="pl-10 pt-2  col-start-1 row-start-1 ">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        {/* ---------------------- Area Central izquierda----------------------     */}

        <div className="ml-24 bg-[#EFEFEF] w-[60%] xl:h-[42vh] h-[32vh] col-start-1 row-start-2 self-center pt-5 mt-10 pl-10">
         
          <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
        </div>

        {/* ---------------------- Area Inferior izquierda ----------------------     */}
        <div className=" col-start-1 row-start-3 contenido ">
          <AreaInferiorIzquierda></AreaInferiorIzquierda>
        </div>
        {/*----------------------- Imagen de la derecha -----------------------------*/}

        <div className=" flex justify-end  col-start-2 row-start-1 imagen">
          <ImagenDerecha1></ImagenDerecha1>
        </div>
      </div>

      {/* PAntalla movil xl --> ancho < 1280  */}
      <div className="w-full xl:hidden  flex flex-col items-center">
        <div className="pt-2 px-6">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        <div className="mt-5 p-2 px-6 pt-8 bg-[#EFEFEF] w-[90%]  ">
        <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
        </div>

        <div className="mt-5 px-6 p-2 pt-8 bg-[#EFEFEF]   ">
          <AreaInferiorIzquierda></AreaInferiorIzquierda>
        </div>

        <div className="w-full ">
          <ImagenDerecha2></ImagenDerecha2>
        </div>
      </div>
    </>
  );
};

export default Tab01;
