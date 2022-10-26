import React from "react";
import Image from "next/image";
import Opcion from "./Opcion";
import Linea from "./Linea";
import Tab01 from "./Tab01";
import Tab02 from "./Tab02";
import Tab03 from "./Tab03";
import Tab04 from "./Tab04";
import Tab05 from "./Tab05";


const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const [contenido, setContenido] = React.useState(1);

  return (
    <>
{/*------------------------ Menu superior ----------------------------*/}
          <div className="grid menu grid-cols-[40%_18%_18%_18%] lg:grid-cols-[15%_21%_21%_21%] 
                           bg-[#ffffff] h-[10vh] ">


            <div className=" flex justify-center items-center w-[90%] lg:w-[70%] p-1 ml-4">
              <Image src="/img/nwm_logo_400px.png" alt="NordWest" />
            </div>
            <div className=" flex justify-center items-center ">
              <a
                className={    "text-xs font-bold    block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1); //setear tab abierto
                  setContenido(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                <Opcion
                  number={1}
                  opcionname="Kennenlernen"
                  selected={openTab}></Opcion>
              </a>
            </div>

            <div className=" flex justify-center items-center ">
              <a
                className={
                  "text-xs font-bold     " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  setContenido(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                <Opcion
                  number={2}
                  opcionname="Das bieten wir Dir!"
                  selected={openTab}></Opcion>
              </a>
            </div>
            <div className=" flex justify-center items-center ">
              <a
                className={
                  "text-xs font-bold    block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                  setContenido(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                <Opcion
                  number={3}
                  opcionname="Durchstarten"
                  selected={openTab}></Opcion>
              </a>
            </div>
          </div>

          <Linea selected={openTab}></Linea>

          {/* ---------------------------------  Contenido ------------------------------------------ */}


          <div className="tab-content tab-space w-[100%] ">
            <div className={contenido === 1 ? "block" : "hidden"} id="link1">
               <Tab01  updateContenido ={setContenido} updateOpenTab ={setOpenTab} ></Tab01> 
              
            </div>
            <div className={contenido === 2 ? "block" : "hidden"} id="link2">
              <Tab02 updateContenido ={setContenido} updateOpenTab ={setOpenTab}></Tab02>
            </div>
            <div className={contenido === 3 ? "block" : "hidden"} id="link3">
              <Tab03 updateContenido ={setContenido} ></Tab03>
            </div>

            <div className={contenido === 4 ? "block" : "hidden"}>
            <Tab04></Tab04>
            </div>

            <div className={contenido === 5 ? "block" : "hidden"}>
            <Tab05></Tab05>
            </div>
          
           
          </div>

          <Footer></Footer>
       

       
   
      
    </>
  );
};




const Footer = () => {
  return (
    <div className="bg-[#464646] w-full h-[9vh] footer lg:grid  lg:grid-cols-[58%_14%_10%_20%] hidden  ">
      <div className="col-start-2  text-white font-tahoma-bold text-bold text-xs flex items-center cursor-pointer">
        <a
          onClick={(e) => {
            e.preventDefault();

            setContenido(4);
          }}>
          Datenschutzerklärung 
        </a>
      </div>

      <div className="col-start-3 text-white font-tahoma-bold text-xs flex items-center cursor-pointer">
        <a
          onClick={(e) => {
            e.preventDefault();

            setContenido(5);
          }}>
          Impressum
        </a>
      </div>

      <div className="col-start-4 flex flex-row items-center">
        <a className="w-[4%]" href="https://www.facebook.com">
          <Image src="/img/brandico_facebook.svg" alt="NordWest" />
        </a>
        <a className="ml-5 w-[11%]" href="https://www.instagram.com">
          <Image src="/img/bxl_instagram-alt.svg" alt="NordWest" />
        </a>
      </div>
    </div>
  );
};


export default Tabs;
