// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// llamada
//http://localhost:3000/api/articulos

import axios from "axios";

import { backend_url, to_emailaddress, from_emailaddress } from "../../config/config";

export default async function handler(req, res) {
  //tiene que ser un correo valido (validar en formulario)
  //validar nombre
  const email = req.body.email ? req.body.email : "renedsoft@gmail.com";
  const nachname = req.body.nachname ? req.body.nachname : "no nachname";
  const vorname = req.body.vorname ? req.body.vorname : "no vorname";
  const postleitzahl = req.body.postleitzahl ? req.body.postleitzahl  : "no postleitzahl";
  const telefon = req.body.telefon ? req.body.telefon : "no telefon";
  const tipopersona = req.body.tipopersona ? req.body.tipopersona  : "no tipopersona";

  let strTipopersona = 1;
  switch (tipopersona) {
    case 1:
      strTipopersona = "Quereinsteiger";
      break;
    case 2:
      strTipopersona = "Telfonischer Kundenberater mit Erfahrung";
      break;
    case 3:
      strTipopersona = "Werkstudent";
      break;

    default:
      strTipopersona = "Quereinsteiger";
      break;
  }

  //console.log(req.body.vorname);

  // {
  //     "to":"renedp1975@gmail.com",
  //     "from": "renedsoft@gmail.com",
  //     "subject":"aaaa",
  //     "body":"Eses es el bofu",
  //     "html": "<h1>Esto es un mensaje 3 html</h1>",
  //     "file":"MTIzNDU2Nzg5MA==",
  //     "filename":"fichero.txt"

  // }

  const url = `${backend_url}/api/sendemail`;
  // console.log(url);

  //

  let bodyData = JSON.stringify({
    to: `${to_emailaddress}`,
    from: `${from_emailaddress}`,
    subject: "NWM Leads",
    html: `<h1>NWM Leads</h1> 
         <h2>${strTipopersona}</h2>
        <h2>vorname: ${vorname}</h2>
        <h2>nachname: ${nachname}</h2>
        <h2>postleitzahl: ${postleitzahl}</h2>
        <h2>email: ${email}</h2>
        <h2>telefon: ${telefon}</h2>
       `,
  });

  console.log(bodyData);

  // let bodyData =JSON.stringify({
  //         "to":"renedp1975@gmail.com",
  //         "from": "renedsoft@gmail.com",
  //         "subject":"aaaa",
  //         "body":"Eses es el bofu",
  //         "html": "<h1>Esto es un mensaje 3 html</h1>",

  //     });

  try {
    const respuesta_api = await axios.post(url, bodyData, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    });
    return res.status(200).json({ ok: "email send ok" });
  } catch (err) {
    console.log("Error in sendFormulario: " + err);
    return res.status(500).json({ name: "ERROR" });
  }
}
