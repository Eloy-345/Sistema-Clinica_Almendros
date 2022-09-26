const fs = require("fs");
const PDFDocument = require("pdfkit");
function createInvoice(invoice, path) {
  let doc = new PDFDocument({
    size: "A4", margin: 50
  });
  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  doc.addPage();
  generateCustomerInformation1(doc, invoice);
  generateFooter(doc);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("fondo.png", 35, 20, { width: 100 })

    .fontSize(20)
    .text("", 200, 50, { align: "right" })
    .fontSize(10)
    .text("", 200, 50, { align: "right" })
    .fontSize(12)
    .text("CARTA DE CONSENTIMIENTO BAJO INFORMACIÓN", 200, 70, { align: "center" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fontSize(12)
    .text("CLINICA ALMENDROS", 50, 105, { align: "left" })
    .text("Dra. Adai Pérez Montesinos", 50, 120, { align: "left" })
    .fontSize(9)
    .text("Cirujana Oftamóloga", 50, 135, { align: "left" });



  const customerInformationTop = 180;
  doc
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("PACIENTE:", 50, 160)
    .font('Helvetica', 12)
    .text(invoice.shipping.a, 120, 160)
    .font("Helvetica-Bold")
    .text("EDAD:", 50, 160 + 15)
    .font('Helvetica', 12)
    .text(invoice.shipping.b, 90, 160 + 15)
    .font("Helvetica-Bold")
    .text("DOMICILIO:", 50, 160 + 30)
    .font('Helvetica', 12)
    .text(invoice.shipping.c, 120, 160 + 30)
    .font("Helvetica-Bold")
    .text("REPRESENTANTE LEGAL, FAMILIAR O ALLEGADO:", 50, 160 + 45)
    .font('Helvetica', 12)
    .text(invoice.shipping.e, 355, 160 + 45)
    .font("Helvetica-Bold")
    .text("EDAD:", 50, 160 + 60)
    .font('Helvetica', 12)
    .text(invoice.shipping.d, 90, 160 + 60)
    .font("Helvetica-Bold")
    .text("DOMICILIO:", 50, 160 + 75)
    .font('Helvetica', 12)
    .text(invoice.shipping.h, 120, 160 + 75)

    .font("Helvetica-Bold")
    .text("EN CALIDAD DE:", 50, 160 + 90)
    .font('Helvetica', 12)
    .text(invoice.shipping.f, 155, 160 + 90)
    .font('Helvetica', 14)
    .text("DECLARO", 50, 270, { align: "center" })
    .fontSize(12, { align: "justify" })
    .font('Helvetica', 12)
    .text("Que el", 50, customerInformationTop + 110)
    .font('Helvetica', 12)
    .text("Dr. Adai Pérez Montesinos", 95, customerInformationTop + 110)
    .font('Helvetica', 12)
    .text("me ha explicado que es", 240, customerInformationTop + 110)
    .font('Helvetica', 12)
    .text("conveniente proceder", 380, customerInformationTop + 110)
    .font('Helvetica', 12)
    .text(invoice.shipping.i, 50, customerInformationTop + 125)// i,j,k,l,m,n,o,p,q,r,s,t,x,z,y
    .font('Helvetica', 12)
    .text("y que, todo acto médico, diagnóstico o terapéutico, sea quirúrgico o no quirúrgico, lleva implicito una serie de complicaciones mayores o menores a veces potencialmente serias, incluyen cierto riesgo de mortalidad y que pueden requerir tratamientos complementarios, médicos o quirúrgicos que aumentan su estancia hospitalaria, dichas complicaciones unas veces son derivadas que están recibiendo o de las posibles anomalias anatómicas y/o de la utilización de los equipos médicos.", 50, customerInformationTop + 140, { align: 'justify' })
    .font('Helvetica', 12)
    .text("Entre las complicaciones que pueden surgir en ", 50, customerInformationTop + 250)
    .font('Helvetica', 12)
    .text(invoice.shipping.j, 305, customerInformationTop + 250)
    .font('Helvetica', 12)
    .text("se encuentra ", 472, customerInformationTop + 265)
    .text(invoice.shipping.k, 50, customerInformationTop + 280)
    .text("Por lo que he comprendido las explicaciones que se me han facilitado en un lenguaje claro y sencillo y que el médico que me ha atendido me realizó todas las observaciones y aclaró todas las dudas que le he planteado. ", 50, customerInformationTop + 310, { align: 'justify' })
    .text("También comprendo que en cualquier momento y sin dar ninguna explicación, puedo revocar el consentimiento que ahora presto, por ello manifiesto que estoy satisfecho (a) con la información recibida y comprendo el alcance de los riesgos del tratamiento y procedimiento.", 50, customerInformationTop + 355, { align: 'justify' })
    .text("Del mismo modo designo a", 50, customerInformationTop + 415)
    .text(invoice.shipping.l, 200, customerInformationTop + 415)
    .text("para que exclusivamente el (ella) reciba información sobre mi estado de salud, diagnóstico, tratamiento y/o pronóstico y en tales condiciones.", 50, customerInformationTop + 430)
    .font('Helvetica', 14)
    .text("CONSIENTO", 50, 650, { align: "center" })
    .font('Helvetica', 12)
    .text("En que se me realicen los procedimientos de diagnóstico y tratamientos que me fueron explicados y que me doy por enterado en mi declaración. Así como, me reservo expresamente el derecho de revocar mi consentimiento en cualquier momento antes de que el y/o los procedimientos, objeto de este documento sean una realidad.", 50, customerInformationTop + 490, { align: 'justify' })
    .text("Oaxaca, Oax., a los", 50, customerInformationTop + 570)
    .text(invoice.shipping.m, 160, customerInformationTop + 570)
    .text("dias del mes de", 180, customerInformationTop + 570)
    .text(invoice.shipping.n, 270, customerInformationTop + 570)
    .text("del año 20", 360, customerInformationTop + 570)
    .text(invoice.shipping.o, 416, customerInformationTop + 570)
    .text("(En caso de que el paciente o su representante revoque el consentimiento)", 50, customerInformationTop + 590,{ align: 'justify' })
    .moveDown()
}
function generateCustomerInformation1(doc, invoice) {
  doc

    .font('Helvetica', 12)
    .text("REVOCO EL CONSENTIMIENTO PRESENTADO EN FECHA", 50, 50,{ align: 'justify' })
    .text(invoice.shipping.p, 385,50)
    .text("Y NO DESEO PROSEGUIR EL TRATAMIENTO QUE DOY CON ESTA FECHA POR FINALIZADO, EXIMIENDO DE TODA RESPONSABILIDAD AL MEDICO TRATANTE, UNA VEZ QUE ME HA EXPLICADO LOS ALCANCES CLÌNICOS DE LA SUSPENSIÓN DEL ACTO MENCIONADO.", 50, 65 , { align: 'justify' })
    .text("(En caso de que el paciente o su representante revoque el consentimiento)", 50,150, { align: 'justify' })
    .text('NIEGO LA AUTORIZACIÓN A QUE ME REALICEN LOS PROCEDIMIENTOS DE DIAGNÓSTICO Y TRATAMIENTO QUE SE ME FUERON EXPLICADOS Y QUE DOY POR ENTERADO EN MI DECLARACIÓN.', 50,200, { align: 'justify' })

    .text(invoice.shipping.q, 50, 100 + 200, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("NOMBRE Y FIRMA DEL MEDICO", 50, 100 + 220, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text(invoice.shipping.r, 250, 100 + 200, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("NOMBRE Y FIRMA DEL PACIENTE", 250, 100 + 220, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })

    .text(invoice.shipping.s, 50, 100 + 300, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("NOMBRE Y FIRMA DEL TESTIGO", 50, 100 + 320, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text(invoice.shipping.t, 250, 100 + 300, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("NOMBRE Y FIRMA DEL TESTIGO", 250, 100 + 320, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })

    .text("Oaxaca, Oax., a los", 50, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text(invoice.shipping.x, 160, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("dias del mes de", 180, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text(invoice.shipping.z, 270, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text("del año 20", 360, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .text(invoice.shipping.y, 416, 100 + 380, { align: 'justify', indent: 30, paragraphGap: 5, width: 412 })
    .moveDown()
}
function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Calle de Almendros 210, Col. Reforma, C.P. 68050, Oaxaca, Oax. Tels: (951)5156087 o 1327202 ",
      50,
      780,
      { align: "center", width: 500 }
    );
}
/*.text("(En caso de que el paciente o su representante revoque el consentimiento)",50, customerInformationTop + 620)
    .text("NIEGO LA AUTORIZACIÓN A QUE ME REALICEN LOS PROCEDIMIENTOS DE DIAGNÓSTICO Y TRATAMIENTO QUE SE ME FUERON EXPLICADOS Y QUE DOY POR ENTERADO EN MI DECLARACIÓN.",50, customerInformationTop + 635)
    
    .text("NOMBRE Y FIRMA DEL MEDICO",50, customerInformationTop + 680)
    .text(invoice.shipping.p, 50, customerInformationTop + 695)
    .text("NOMBRE Y FIRMA DEL PACIENTE",250, customerInformationTop + 680)
    .text(invoice.shipping.q, 250, customerInformationTop + 695)
    
    .text("(En caso de que el paciente o su representante revoque el consentimiento)", 50, customerInformationTop + 530)
    .text("REVOCO EL CONSENTIMIENTO PRESENTADO EN FECHA", 50, customerInformationTop + 545)
    .text(invoice.shipping.p, 385, customerInformationTop + 545)
    .text("Y NO DESEO PROSEGUIR EL TRATAMIENTO QUE DOY CON ESTA FECHA POR FINALIZADO, EXIMIENDO DE TODA RESPONSABILIDAD AL MEDICO TRATANTE, UNA VEZ QUE ME HA EXPLICADO LOS ALCANCES CLÌNICOS DE LA SUSPENSIÓN DEL", 50, customerInformationTop + 560, { align: 'justify' })
    
    */



function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(cents) {
  return + (cents / 100).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createInvoice
};
