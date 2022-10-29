import Head from "next/head";
import Image from "next/image";
import Tabs from "./components/Tabs";
// import { useEffect, useRef } from "react";

export default function Home() {


  // const ventana_principal = useRef();


    // // trigger on the first render of the component 
    // useEffect(() => {
    //   // get the height of the div element
    //   // document.body.requestFullscreen();
    //   console.log(
    //     "The height of the div is: ", ventana_principal.current.offsetHeight
    //   );

    //   // console.log(ventana_principal)
      

    //   if (ventana_principal.requestFullscreen) {
    //     ventana_principal.requestFullscreen();
    //     console.log("firefox");
    //   } else if (ventana_principal.webkitRequestFullscreen) { /* Safari */
    //     console.log("safari");
    //   ventana_principal.webkitRequestFullscreen();
    //   } else if (ventana_principal.msRequestFullscreen) { /* IE11 */
    //   console.log("IE11");
    //   ventana_principal.msRequestFullscreen();
    //   }
    // }, []);
  



  return (
    <>
      <Head>
        <title>Nordwest Media</title>
        <meta name="description" content="Nordwest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" /> */}

        {/* <!-- possible content values: default, black or black-translucent --> */}
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/> */}

        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>

      {/* <main ref={ventana_principal}> */}
      <main>
        <Tabs></Tabs>
      </main>
    </>
  );
}
