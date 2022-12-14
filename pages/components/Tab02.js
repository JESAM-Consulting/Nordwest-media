import React from "react";
import Opcion2 from "./Opcion2";
import ImagenDerecha1 from "./ImagenDerecha1";
import ImagenDerecha2 from "./ImagenDerecha2";
import AreaInferiorIzquierda from "./AreaInferiorIzquierda";
import { useRecoilState } from "recoil";
import { tipoPersona } from "../../src/globales";
import { useState, useEffect } from "react";

const Tab02 = (props) => {
  const [vTipoPersona, setTipoPersona] = useRecoilState(tipoPersona);

  useEffect(() => {
    const valorInicial = 1;
    //setTipoPersona(valorInicial);
  }, []);

  return (
    <>
      {/* lg:grid lg:grid-cols-[66%_34%] lg:grid-rows-[6vh_55vh_18vh]  lg:w-full hidden  */}

      <div
        className="
      lg:grid 
      lg:grid-cols-[66%_34%] 
      lg:grid-rows-[15vh_48vh_19vh]  
          xl:grid-rows-[15vh_48vh_19vh]   
      lg:w-full 
      hidden     ">
        {/* ---------------------- Area Superior izquierda ----------------------     */}
        <div className="pl-10 pt-2  col-start-1 row-start-1  ">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        {/* ---------------------- Area Central izquierda----------------------     */}
        {/* w-[60%] xl:h-[44vh] h-[32vh] */}
        <div className="ml-16  col-start-1 row-start-2 self-start mt-5   ">
          <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}
            setTipoPersona={setTipoPersona}></AreaCentralIzquierda>
        </div>

        {/* ---------------------- Area Inferior izquierda ----------------------     */}
        <div className=" col-start-1 row-start-3 contenido   ">
          <AreaInferiorIzquierda
            texto1="Warum fragen wir das?"
            texto2="Wir schaffen Raum für die Persönlichkeit unserer Mitarbeiterinnen und Mitarbeiter. Für uns ist individueller Service und qualitative Beratung eine Herzenssache."></AreaInferiorIzquierda>
        </div>
        {/*----------------------- Imagen de la derecha -----------------------------*/}

        <div className=" flex justify-end  col-start-2 row-start-1  row-end-4    imagen  ">
          <ImagenDerecha1></ImagenDerecha1>
        </div>
      </div>

      {/* PAntalla movil xl --> ancho < 1280  */}
      <div className="w-full lg:hidden  flex flex-col items-center">
        <div className="pt-2 px-6">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        <div className="mt-5  px-3  bg-[#EFEFEF] w-[90%]  ">
          <AreaCentralIzquierda
            updateContenido={props.updateContenido}
            updateOpenTab={props.updateOpenTab}
            setTipoPersona={setTipoPersona}></AreaCentralIzquierda>
        </div>

        <div className="mt-5 px-6 p-2 pt-8 bg-[#EFEFEF]   ">
          <AreaInferiorIzquierda
            texto1="Warum fragen wir das?"
            texto2="Wir schaffen Raum für die Persönlichkeit unserer Mitarbeiterinnen und Mitarbeiter. Für uns ist individueller Service und qualitative Beratung eine Herzenssache."></AreaInferiorIzquierda>
        </div>

        <div className="w-full ">
          <ImagenDerecha2
            updateContenido={props.updateContenido}></ImagenDerecha2>
        </div>
      </div>
    </>
  );
};

const AreaSuperiorIzquierda = () => {
  return (
    <>
      <div className="xl:pt-4 ">
        <span className="underline underline-offset-4 font-tahoma-bold text-[17px]">
          Jetzt Teil von
        </span>
        <span className="font-tahoma-bold text-[17px]]">der nwm werden!</span>
      </div>
      <div className=" font-tahoma xl:text-[15px] text-[12px] lg:text-[11px] text-[#AFA9A9] w-[90%] xl:w-[60%] lg:w-[100%] pt-2">
        Wir bieten einen krisensicheren Job, in dem sich unsere
        Mitarbeiter*innen individuell entwickeln können. Mit flachen Hierarchien
        und Kommunikation auf Augenhöhe.
      </div>
    </>
  );
};

const AreaCentralIzquierda = (props) => {
  return (
    // p-6 w-[48vw]  xl:h-[34vh] h-[32vh]

    <div className="lg:px-8 lg:py-1 xl:w-[38vw] lg:w-[45vw] bg-[#EFEFEF] ">
      <div
        className="pt-6 px-4 lg:px-0 font-tahoma-bold text-[#4B4B4B] text-center lg:text-start 
          text-[19px]
          font-[700] 
          leading-[30x]">
        Was trifft am besten <br className="lg:hidden"/>auf Dich zu?
      </div>

      <div className="mt-5  pb-6  text-center lg:text-start">
        <div>
          <button
            className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto"
            onClick={(e) => {
              e.preventDefault();
              props.setTipoPersona(1);
              props.updateContenido(3);
              props.updateOpenTab(3);
            }}>
            Quereinsteiger
          </button>
        </div>

        <div>
          <button
            className="mt-3 btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-3 py-2 font-roboto"
            onClick={(e) => {
              e.preventDefault();
              props.setTipoPersona(2);
              props.updateContenido(3);
              props.updateOpenTab(3);
            }}>
            Telfonischer Kundenberater mit Erfahrung{" "}
          </button>
        </div>

        <div>
          <button
            className="mt-3 btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto"
            onClick={(e) => {
              e.preventDefault();
              props.setTipoPersona(3);
              props.updateContenido(3);
              props.updateOpenTab(3);
            }}>
            Werkstudent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab02;
