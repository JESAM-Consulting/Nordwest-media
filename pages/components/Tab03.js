import React from "react";
import Opcion2 from "./Opcion2";

const Tab01 = () => {
  return (
    <div className="grid grid-cols-[66%_34%] grid-rows-[6vh_60vh_18vh]  w-full">
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
        <div className=" pt-2">

          <button className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-5 py-2 font-roboto">Jetzt bewerben</button>

        </div>
      </div>

      {/* ---------------------- Area Central izquierda----------------------     */}

      <div className="pl-10 w-[90%]   col-start-1 row-start-2 self-center   ">

        <div >
          <span className="underline underline-offset-4 tahoma-font-bold text-[#4B4B4B] text-[2.2rem] font-extrabold   leading-[2.7rem]">Das bie</span>
          <span className="tahoma-font-bold text-[#4B4B4B] text-[2.2rem] font-extrabold   leading-[2.7rem] ">ten wir Dir!</span>


        </div>




        <div className="mt-5 text-[0.9rem] text-[#4B4B4B]">
          <ul>
            <li> Flexible Arbeitszeiten in unserer Kernarbeitszeit (Montag bis Freitag von 8:00 Uhr bis 20:00 Uhr)</li>
            <li> Monatliches Festgehalt</li>
            <li> Zahlung der Vermögenswirksamen Leistungen, sowie Förderung der betrieblichen Altersvorsorge</li>
            <li> Sicherer Arbeitsplatz als Teil der systemrelevanten Infrastruktur, sowie 20jährige Expertise als Tochterunternehmen und Service-Center der Sparkasse Bremen</li>
            <li> Persönliche und individuelle Einarbeitung (Fachschulungen und Kommunikation) durch unsere Fachspezialisten</li>
            <li> Erfahrungen im Banking sammeln oder erweitern (keine Vorkenntnisse erforderlich)</li>
            <li> {'Umfangreiche Sozialleistungen wie Beihilfen zur Gesundheitsvorsorge und Teilnahme am Angebot „Job-Ticket" der BSAG'}</li>
            <li> Moderne und klimatisierte Arbeitsplätze in zentraler Lage Technologiepark Bremen - Homeoffice ist aber auch möglich</li>
            <li> Kostenlose Getränkebar (Kaffeespezialitäten, Tee, Wasser)</li>
            <li> Kollegiales Arbeitsklima mit flachen Hierarchien, Kommunikation auf Augenhöhe und Duz-Kultur </li>
          </ul>
        </div>


        <div className="pt-2">
          <span className="underline underline-offset-4 tahoma-font-bold text-[#4B4B4B] text-[2.2rem] font-extrabold   leading-[2.7rem]">Deine A</span>
          <span className="tahoma-font-bold text-[#4B4B4B] text-[2.2rem] font-extrabold   leading-[2.7rem] ">ufgaben</span>
        </div>




        <div className="mt-5 text-[0.9rem] text-[#4B4B4B]">
          <ul>
            <li> Du bist der/die Ansprechpartner*in Nr. 1 für Kundinnen und Kunden der Sparkasse Bremen</li>
            <li>Mit Deiner Serviceorientierung und Deinem Fachwissen löst Du fallabschließend Fragen und Anliegen unserer Kunden*innen, die uns per Telefon, Mail oder Chat erreichen</li>
            <li>Bei Bedarf leitest Du an Fachspezialisten über oder vereinbarst Rückrufe und Termine mit dem/der jeweiligen Berater*in</li>
          </ul>
        </div>


      </div>

      {/* ---------------------- Area Inferior izquierda ----------------------     */}
      <div
        className=" col-start-1 row-start-3 bg-[#EFEFEF]  grid  grid-cols-[9%_80%] contenido w-[75vw] 
      grid-rows-[3vh_10vh] pt-5   leading-[0.95rem]">
        <img
          src="/img/entypo_help-with-circle.svg"
          alt="NordWest"
          className=" justify-self-end  self-center w-[2.3vw]"
        />
        <div className=" col-start-2 text-[#8C8C8C] self-center font-tahoma text-[1rem] ">
        Warum fragen wir das?
        </div>

        <div className="text-[#AFA9A9] col-start-2 self-start font-tahoma w-[43vw] text-[0.7rem] pt-1 ">
        Wir bieten einen krisensicheren Job, in dem sich unsere Mit­arbei­ter*innen individuell entwickeln können. Mit flachen Hierarchien und Kommunikation auf Augenhöhe.
        </div>
      </div>
      {/* Imagen de la derecha */}

      <div className=" flex justify-end  col-start-2 row-start-1">
        <img
          src="/img/girl-large.png"
          alt="NordWest"
          className="imagen  h-[89vh] "
        />
      </div>
    </div>
  );
};

export default Tab01;
