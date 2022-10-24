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

  const Footer = () => {
    return (
      <div className="bg-[#464646] w-full h-[9vh] footer lg:grid  lg:grid-cols-[58%_12%_8%_20%] hidden  ">
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
            <img src="/img/brandico_facebook.svg" alt="NordWest" />
          </a>
          <a className="ml-5 w-[11%]" href="https://www.instagram.com">
            <img src="/img/bxl_instagram-alt.svg" alt="NordWest" />
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      {/* <div className="flex flex-wrap"> */}
        {/* <div className="w-full "> */}
          <div className="grid menu grid-cols-[40%_18%_18%_18%] xl:grid-cols-[15%_21%_21%_21%] bg-[#ffffff] ">
            <div className=" flex justify-center items-center w-full md:w-[80%]">
              <img src="/img/nwm_logo_400px.png" alt="NordWest" />
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
                  "text-xs font-bold    block leading-normal " +
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

          {/* -------------  Contenido ----------- */}


          <div className="tab-content tab-space w-[100%] ">
            <div className={contenido === 1 ? "block" : "hidden"} id="link1">
               <Tab01  updateContenido ={setContenido} updateOpenTab ={setOpenTab} ></Tab01> 
              
            </div>
            <div className={contenido === 2 ? "block" : "hidden"} id="link2">
              <Tab02></Tab02>
            </div>
            <div className={contenido === 3 ? "block" : "hidden"} id="link3">
              <Tab03></Tab03>
            </div>

            <div className={contenido === 4 ? "block" : "hidden"}>
            <Tab04></Tab04>
            </div>

            <div className={contenido === 5 ? "block" : "hidden"}>
            <Tab05></Tab05>
            </div>
          
           
          </div>

          <Footer></Footer>
       

       
        {/* </div> */}
        
      {/* </div> */}
      
    </>
  );
};

export default Tabs;
