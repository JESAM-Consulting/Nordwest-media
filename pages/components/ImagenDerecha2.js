import React from "react";
import Image from 'next/image'

const ImagenDerecha2 = (props) => {
  return (
    <div className="relative">
      <Image src="/img/girl-low.png" alt="NordWest" className="  w-[100vw] " />
      {/* <div class="absolute bottom-0 border border-black   "> */}
      <div className="text-[#000000] text-[17px] font-tahoma-bold text-over-image2 left-8">
        <div>
        <a
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(4);
          }}>
          Datenschutzerklärung 
        </a>


        
        </div>

        <div className="pt-3">
        <a
          onClick={(e) => {
            e.preventDefault();
            props.updateContenido(5);
          }}>
          Impressum
          </a>
        </div>

        <div className="flex flex-row pt-3">
          
          <a className="" href="https://www.facebook.com">
            <Image src="/img/facebook-dark.svg"/>
            </a>
          

          
          <a className="ml-5 " href="https://www.instagram.com">
            <Image src="/img/instagram-dark.svg"/>
            </a>

          
        </div>


      

      </div>
      </div>
   
  );
};



export default ImagenDerecha2;