const dev = process.env.NODE_ENV !== "production";


const backend_url = dev ? "http://localhost:1337" :  "https://nordwest-media.herokuapp.com";



//From Address must be registered in sendgrid
const from_emailaddress =  dev ? "renedsoft@gmail.com": "renedsoft@gmail.com";

//direccion a donde se envia el correo
const to_emailaddress = dev ? "renedp1975@gmail.com": "sam@jesamconsulting.com";

// sam@jesamconsulting.com



const servidor_url = dev
  ? "http://localhost:3000"
  : "https://nordwest.vercel.app";


export {servidor_url , backend_url , from_emailaddress,to_emailaddress }  
