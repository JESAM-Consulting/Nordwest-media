import React from "react";
import Image from "next/image";
import Opcion from "./Opcion";
import Linea from "./Linea";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const [contenido, setContenido] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="grid  grid-cols-[18%_25%_25%_25%_10%]">
            <div className=" flex justify-center items-center ">
              <img src="/img/nwm_logo_400px.png" alt="NordWest" />
            </div>
            <div className=" flex justify-center items-center ">
              <a
                className={
                  "text-xs font-bold  px-5 py-3  block leading-normal " +
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
                  "text-xs font-bold  px-5 py-3  block leading-normal " +
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
                  "text-xs font-bold  px-5 py-3  block leading-normal " +
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

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={contenido === 1 ? "block" : "hidden"}
                  id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div
                  className={contenido === 2 ? "block" : "hidden"}
                  id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div
                  className={contenido === 3 ? "block" : "hidden"}
                  id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>

                <div className={contenido === 4 ? "block" : "hidden"}>
                  <p>SSSS</p>
                </div>

                <div className={contenido === 5 ? "block" : "hidden"}>
                  <p>DDDD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  ----------  Footer -------------------- */}
        <div className="bg-[#464646] w-full h-[8%] footer grid  grid-cols-[58%_12%_8%_20%]  flex justify-center items-center">
          <div className="col-start-2  text-white font-roboto  text-[0.6rem] flex items-center cursor-pointer">
            <a
              onClick={(e) => {
                e.preventDefault();
                console.log("AAAA");
                setContenido(4);
              }}>
              Datenschutzerklärung
            </a>
          </div>

          <div className="col-start-3 text-white font-roboto text-[0.6rem] flex items-center cursor-pointer">
            <a
              onClick={(e) => {
                e.preventDefault();
                console.log("BBB");
                setContenido(5);
              }}>
              Impressum
            </a>
          </div>

          <div className="col-start-4 flex flex-row items-center">
           <a className="w-[4%]"  href="https://www.facebook.com">
           <img  src="/img/brandico_facebook.svg" alt="NordWest" /> 
            </a> 
            <a className="ml-3 w-[11%]" href="https://www.instagram.com">
            <img  src="/img/bxl_instagram-alt.svg" alt="NordWest" />
            </a>
          </div>

          {/* <div className="col-start-5">
            
          </div> */}


        </div>
      </div>
    </>
  );
};

export default Tabs;
