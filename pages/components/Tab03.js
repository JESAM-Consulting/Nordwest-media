import React from "react";
import Opcion2 from "./Opcion2";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImagenDerecha1 from "./ImagenDerecha1";
import ImagenDerecha2 from "./ImagenDerecha2";

// const ImagenDerecha1 = () => {
//   return (
//     <>
//       <img src="/img/girl-large.png" alt="NordWest" className="  h-[89vh] " />
//     </>
//   );
// };

// const ImagenDerecha2 = () => {
//   return (
//     <>
//       <img src="/img/girl-low.png" alt="NordWest" className="  w-[100vw] " />
//     </>
//   );
// };


const VentanaModal = (props) => {

 

  const styles = {
    ".MuiFormControlLabel-label": {
      fontSize: "0.55rem",
      fontFamily: "Inter-Light !important"
      // color:"red"
    }
 };
 

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl lg:w-[40vw] w-[100vw] mx-2">
          {/*content*/}
          <div className="border-0 pt-6 pb-10 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1  ">

              <img src="/img/nwm_logo_400px.png" className="w-[40%] ml-7"/>

              <button className="p-1 ml-auto mr-6 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}>

                <span className=" opacity-1 h-8 w-8 text-2xl block outline-none focus:outline-none">
                  <img src="/img/ei_close.svg" />


                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative  mx-10 flex-auto ">
              <div className=" font-inter-regular  mt-6 text-[1rem]">Jetzt bewerben</div>
              <div className=" font-inter-light mt-2 text-[0.6rem]">Du haben es fast geschafft!</div>
              <div className=" font-inter-light mt-2 text-[0.9rem]">So können wir Dich erreichen</div>
              <div className="mb-1">
                <TextField className=" w-full h-[5vh]" id="standard-basic" label="Vorname" variant="standard" />
              </div>
              <div className="mb-1">
                <TextField className=" w-full h-[5vh]" id="nachname" label="Nachname" variant="standard" />
              </div>

              <div className="mb-1">
                <TextField className=" w-full h-[5vh]" id="Postleitzahl" label="Postleitzahl" variant="standard" />
              </div>

              <div className="mb-1">
                <TextField  className=" w-full h-[5vh]" id="Email" label="Email" variant="standard" />
              </div>

              <div className="mb-1">
                <TextField className=" w-full h-[5vh]" id="Telefon" label="Telefon" variant="standard" />
              </div>

            






              <div className="mt-6">
                <button
                  className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-7 py-1 font-roboto ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShowModal(false)}
                >
                  Absenden
                </button>
              </div>

              <div>
                

                <FormControlLabel sx = {styles} control={<Checkbox defaultChecked size="small" sx={{ '& .MuiSvgIcon-root': { fontSize: 11 } }}  />} label=" Hiermit akzeptiere ich die geltenden Datenschutzbestimmungen." />
                {/* <Checkbox {...label} size="small"  sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} /> */}

              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

const AreaSuperiorIzquierda = () => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal ? (

        <VentanaModal setShowModal={setShowModal}></VentanaModal>

      ) : null}

      <div>
        <span className="underline underline-offset-4 font-tahoma-bold text-[0.9rem]">
          Jetzt Teil von
        </span>
        <span className="font-tahoma-bold text-[0.9rem]">der nwm werden!</span>
      </div>
      <div className=" pt-2">
        <button className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Jetzt bewerben
        </button>





      </div>
      <div className="tahoma-font-bold text-[#4B4B4B] text-[1.2rem] font-extrabold   leading-[2.7rem]">
        <span className="underline underline-offset-4 ">
          Das bie
        </span>
        <span className=" ">
          ten wir Dir!
        </span>
      </div>

      <div className="mt-0 text-[0.7rem] text-[#4B4B4B]">
        <ul>
          <li>

            Flexible Arbeitszeiten in unserer Kernarbeitszeit (Montag bis
            Freitag von 8:00 Uhr bis 20:00 Uhr)
          </li>
          <li> Monatliches Festgehalt</li>
          <li>

            Zahlung der Vermögenswirksamen Leistungen, sowie Förderung der
            betrieblichen Altersvorsorge
          </li>
          <li>

            Sicherer Arbeitsplatz als Teil der systemrelevanten Infrastruktur,
            sowie 20jährige Expertise als Tochterunternehmen und Service-Center
            der Sparkasse Bremen
          </li>
          <li>

            Persönliche und individuelle Einarbeitung (Fachschulungen und
            Kommunikation) durch unsere Fachspezialisten
          </li>
          <li>

            Erfahrungen im Banking sammeln oder erweitern (keine Vorkenntnisse
            erforderlich)
          </li>
          <li>

            {
              'Umfangreiche Sozialleistungen wie Beihilfen zur Gesundheitsvorsorge und Teilnahme am Angebot „Job-Ticket" der BSAG'
            }
          </li>
          <li>

            Moderne und klimatisierte Arbeitsplätze in zentraler Lage
            Technologiepark Bremen - Homeoffice ist aber auch möglich
          </li>
          <li> Kostenlose Getränkebar (Kaffeespezialitäten, Tee, Wasser)</li>
          <li>

            Kollegiales Arbeitsklima mit flachen Hierarchien, Kommunikation auf
            Augenhöhe und Duz-Kultur{" "}
          </li>
        </ul>
      </div>

      <div className=" tahoma-font-bold text-[#4B4B4B] text-[1.2rem] font-extrabold   leading-[2.7rem]">
        <span className="underline underline-offset-4 ">
          Deine A
        </span>
        <span className="">
          ufgaben
        </span>
      </div>

      <div className=" text-[0.7rem] text-[#4B4B4B]">
        <ul>
          <li>
            {" "}
            Du bist der/die Ansprechpartner*in Nr. 1 für Kundinnen und Kunden
            der Sparkasse Bremen
          </li>
          <li>
            Mit Deiner Serviceorientierung und Deinem Fachwissen löst Du
            fallabschließend Fragen und Anliegen unserer Kunden*innen, die uns
            per Telefon, Mail oder Chat erreichen
          </li>
          <li>
            Bei Bedarf leitest Du an Fachspezialisten über oder vereinbarst
            Rückrufe und Termine mit dem/der jeweiligen Berater*in
          </li>
        </ul>
      </div>
    </>
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
        className=" justify-self-end  self-center w-[2.3vw]"
      />
      <div className=" col-start-2 text-[#8C8C8C] self-center font-tahoma text-[1rem] ">
        Warum fragen wir das?
      </div>

      <div className="text-[#AFA9A9] col-start-2 self-start font-tahoma w-[43vw] text-[0.7rem] pt-1 ">
        Wir bieten einen krisensicheren Job, in dem sich unsere
        Mit­arbei­ter*innen individuell entwickeln können. Mit flachen
        Hierarchien und Kommunikation auf Augenhöhe.
      </div>
    </div>
  );
};

const Tab03 = () => {
  return (
    <>
      <div className="xl:grid xl:grid-cols-[66%_34%] xl:grid-rows-[6vh_60vh_18vh]  xl:w-full hidden    ">
        {/* ---------------------- Area Superior izquierda ----------------------     */}
        <div className="pl-10 pt-2  col-start-1 row-start-1 ">
          <AreaSuperiorIzquierda></AreaSuperiorIzquierda>
        </div>

        {/* ---------------------- Area Central izquierda----------------------     */}

        {/* <div className="ml-24 bg-[#EFEFEF] w-[60%] xl:h-[40vh] h-[32vh] col-start-1 row-start-2 self-center pt-5 mt-10 pl-10">
        
         <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div> */}

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

        {/* <div className="mt-5 p-2 px-6 pt-8 bg-[#EFEFEF] w-[90%]  ">
       <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div> */}

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

export default Tab03;
