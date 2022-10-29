const dev = process.env.NODE_ENV !== "production";

//  const backend_url = "http://localhost:1337";
const  backend_url = "https://nordwest-media.herokuapp.com";



const from_emailaddress = "renedp1975@gmail.com";
const to_emailaddress = "renedp1975@gmail.com";

const servidor_url = dev
  ? "http://localhost:3000"
  : "https://misitioweb.com";


export {servidor_url , backend_url , from_emailaddress,to_emailaddress }  
