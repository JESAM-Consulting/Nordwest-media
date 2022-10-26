import React from "react";
import Opcion2 from "./Opcion2";
import ImagenDerecha1 from "./ImagenDerecha1";
import ImagenDerecha2 from "./ImagenDerecha2";
import AreaInferiorIzquierda from "./AreaInferiorIzquierda";



const Tab01 = (props) => {
  return (
    <>
      {/*  PAntalla grande xl --> ancho > 1280 */}

      <div className="
          lg:grid 
          lg:grid-cols-[66%_34%] 
          lg:grid-rows-[15vh_46vh_19vh]  
          xl:grid-rows-[15vh_48vh_19vh]   
          lg:w-full 
          hidden    ">
        {/* ---------------------- Area Superior izquierda ----------------------     */}
        <div className="pl-10 pt-2  col-start-1 row-start-1    ">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        {/* ---------------------- Area Central izquierda----------------------     */}


        <div className="ml-16  col-start-1 row-start-2 self-start mt-5  ">
         
          <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}>
          </AreaCentralIzquierda>
        </div>

        {/* ---------------------- Area Inferior izquierda ----------------------     */}
        <div className=" col-start-1 row-start-3 contenido  ">
          <AreaInferiorIzquierda 
          texto1={"Über uns"}
          texto2={"Als Tochtergesellschaft der Sparkasse Bremen AG ist die nwm  nordwest-media für den Kundenservice zuständig. Unsere motivierten Mitarbeiter*innen helfen, beraten und lösen Probleme. Indem sie per Telefon - oder auf anderen Kommunikationskanälen - mit den Kund*innen der Sparkasse Bremen sprechen. Und zwar so individuell wie möglich. Denn unser Ziel ist es, Menschen stets freundlich und kompetent zu unterstützen."}          
          ></AreaInferiorIzquierda>
        </div>
        {/*----------------------- Imagen de la derecha -----------------------------*/}

        <div className=" flex justify-end  col-start-2  row-start-1 row-end-4  imagen  ">
          <ImagenDerecha1></ImagenDerecha1>
        </div>
      </div>

      {/* PAntalla movil xl --> ancho < 1280  */}
      <div className="w-full lg:hidden  flex flex-col items-center">
        <div className="pt-2 px-6">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        <div className="mt-5  px-3   bg-[#EFEFEF] w-[90%]  ">
        <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
        </div>

        <div className="mt-5 px-6 p-2 pt-2 pb-10 bg-[#EFEFEF]   ">
        <AreaInferiorIzquierda 
          texto1={"Über uns"}
          texto2={"Als Tochtergesellschaft der Sparkasse Bremen AG ist die nwm  nordwest-media für den Kundenservice zuständig. Unsere motivierten Mitarbeiter*innen helfen, beraten und lösen Probleme. Indem sie per Telefon - oder auf anderen Kommunikationskanälen - mit den Kund*innen der Sparkasse Bremen sprechen. Und zwar so individuell wie möglich. Denn unser Ziel ist es, Menschen stets freundlich und kompetent zu unterstützen."}          
          ></AreaInferiorIzquierda>
        </div>

        <div className="w-full ">
          <ImagenDerecha2 updateContenido ={props.updateContenido}></ImagenDerecha2>
        </div>
      </div>
    </>
  );
};



const AreaSuperiorIzquierda = () => {
  return (
    <>
      <div className="pt-4">
        <span className="underline underline-offset-4 font-tahoma-bold text-[17px]">
          Jetzt Teil von
        </span>
        <span className="font-tahoma-bold text-[17px]">der nwm werden!</span>
      </div>
      <div className="font-tahoma xl:text-[15px] text-[12px] lg:text-[11px] text-[#AFA9A9] w-[90%] xl:w-[60%] lg:w-[100%]  pt-2">
        Wir bieten einen krisensicheren Job, in dem sich unsere
        Mitarbeiter*innen individuell entwickeln können. Mit flachen Hierarchien
        und Kommunikation auf Augenhöhe.
      </div>
    </>
  );
};

const AreaCentralIzquierda = (props) => {
  return (
    

    // pt-6 tahoma-font-bold text-[#4B4B4B] xl:text-[2.2rem] lg:text-[1.2rem]
    //      text-[1.5rem] font-extrabold text-center lg:text-start 
    //      xl:leading-[2.7rem] lg:leading-[1.7rem]  leading-[1.7rem]

    //  xl:text-[2.2rem] lg:text-[1.2rem] text-[1.5rem] 
    //xl:leading-[2.7rem] lg:leading-[1.7rem]  leading-[1.7rem] 
    
    <div className="lg:px-8 lg:py-3 xl:w-[38vw] lg:w-[45vw]  bg-[#EFEFEF] ">
      <div className="pt-6 px-4 lg:px-0 font-tahoma-bold text-[#4B4B4B] text-center lg:text-start 
      font-[700]
          text-[20px] 
          leading-[30x]
         ">
        In nur 3 Schritten <br /> zu Deinem neuen Job
      </div>

      {/* xl:mt-10 mt-5 lg:mt-5  */}
      <div className="mt-5  pb-1  text-center lg:text-start">
        <button className="btn bg-[#E20613] rounded text-[12px] text-[#ffffff] px-5 py-2 font-roboto-bold "
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(2);
            props.updateOpenTab(2);
          }}
        >
          Jetzt Bewerbung starten 
        </button>
      </div>
      {/* TODO: centrar correctamente */}

      {/* lg:justify-start */}
      <div className="pb-6 lg:flex lg:flex-row mt-3  lg:w-[100%]  w-[40%]  flex flex-col ml-[28vw] lg:ml-[0vw]   ">
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



export default Tab01;
