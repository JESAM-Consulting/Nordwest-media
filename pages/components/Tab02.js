import React from "react";
import Opcion2 from "./Opcion2";
import ImagenDerecha1 from "./ImagenDerecha1";
import ImagenDerecha2 from "./ImagenDerecha2";
import AreaInferiorIzquierda from "./AreaInferiorIzquierda";





const Tab02 = (props) => {
  return (
    <>
    <div className="lg:grid lg:grid-cols-[66%_34%] lg:grid-rows-[6vh_60vh_18vh]  lg:w-full hidden    ">
       {/* ---------------------- Area Superior izquierda ----------------------     */}
       <div className="pl-10 pt-2  col-start-1 row-start-1 ">
         <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
       </div>

       {/* ---------------------- Area Central izquierda----------------------     */}

       <div className="ml-24 bg-[#EFEFEF] w-[60%] xl:h-[44vh] h-[32vh] col-start-1 row-start-2 self-center pt-5 mt-10 pl-10">
        
         <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div>

       {/* ---------------------- Area Inferior izquierda ----------------------     */}
       <div className=" col-start-1 row-start-3 contenido ">
       <AreaInferiorIzquierda 
           texto1 = "Warum fragen wir das?"
           texto2= "Wir schaffen Raum für die Persönlichkeit unserer Mitarbeiterinnen und Mitarbeiter. Für uns ist individueller Service und qualitative Beratung eine Herzenssache.">
          </AreaInferiorIzquierda>
       </div>
       {/*----------------------- Imagen de la derecha -----------------------------*/}

       <div className=" flex justify-end  col-start-2 row-start-1 imagen">
         <ImagenDerecha1></ImagenDerecha1>
       </div>
     </div>

     {/* PAntalla movil xl --> ancho < 1280  */}
     <div className="w-full lg:hidden  flex flex-col items-center">
       <div className="pt-2 px-6">
         <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
       </div>

       <div className="mt-5 p-2 px-6 pt-8 bg-[#EFEFEF] w-[90%]  ">
       <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div>

       <div className="mt-5 px-6 p-2 pt-8 bg-[#EFEFEF]   ">
          <AreaInferiorIzquierda 
           texto1 = "Warum fragen wir das?"
           texto2= "Wir schaffen Raum für die Persönlichkeit unserer Mitarbeiterinnen und Mitarbeiter. Für uns ist individueller Service und qualitative Beratung eine Herzenssache.">
          </AreaInferiorIzquierda>
       </div>

       <div className="w-full ">
         <ImagenDerecha2></ImagenDerecha2>
       </div>
     </div>
   </>

  );
};



const AreaSuperiorIzquierda = () => {
  return (
    <>
      <div>
          <span className="underline underline-offset-4 font-tahoma-bold text-[0.9rem]">
            Jetzt Teil von
          </span>
          <span className="font-tahoma-bold text-[0.9rem]">
            der nwm werden!
          </span>
        </div>
        <div className="font-tahoma text-[0.85rem] text-[0.65rem] text-[#AFA9A9] lg:w-[40%] w-[90%] pt-2">
          Wir bieten einen krisensicheren Job, in dem sich unsere
          Mitarbeiter*innen individuell entwickeln können. Mit flachen
          Hierarchien und Kommunikation auf Augenhöhe.
        </div>
    </>
  );
};


const AreaCentralIzquierda = (props) => {
  return (
    <div className="">
      <div className="tahoma-font-bold text-[#4B4B4B] lg:text-[1.5rem] text-[1.5rem] font-extrabold text-center lg:text-start lg:leading-[2.7rem] leading-[1.7rem] ">
      Was trifft am besten auf Dich zu?
      </div>

      <div className="mt-5  text-center lg:text-start">
      <div>
          <button className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto">Quereinsteiger</button>
          </div>
		  
          <div>
          <button className="mt-3 btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto">Telfonischer Kundenberater mit Erfahrung </button>
          </div>

          <div>
          <button className="mt-3 btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto">Werkstudent</button>
          </div>
      </div>
    
    </div>
  );
};

export default Tab02;
