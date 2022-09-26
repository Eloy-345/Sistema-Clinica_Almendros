const fs = require("fs");
const PDFDocument = require("pdfkit");
function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
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
    .image("fondo.png", 40, 30, { width: 100 })
    .fontSize(20)

    .fontSize(10)
    .text("", 100, 50, { align: "right" })
    .fontSize(15)
    .text("CLINICA ALMENDROS", 140, 65, { align: "left" })
    .text("    HISTORIAL CLINICA", 370, 65, { align: "left" })
    .fontSize(9)
    .text("UNIDAD MÉDICO QUIRURGÍCA", 140, 80, { align: "left" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fontSize(10)
    .font("Helvetica")
    .text("EXPEDIENTE:", 50, 130)
    .text(invoice.shipping.name, 120, 130)
    .font("Helvetica-Bold")
    .text("FICHA DE IDENTIFICACIÓN", 50, 150, { align: "left" });


  const customerInformationTop = 200;
  const customerInformationTop1 = 180;
  doc
    .fontSize(10)
    .font("Helvetica")
    .text("PACIENTE:", 50, customerInformationTop1)
    .font("Helvetica")
    .text(invoice.shipping.a, 110, customerInformationTop1)
    .font("Helvetica")
    .text("FECHA:", 330, customerInformationTop1)
    .font("Helvetica")
    .text(formatDate(new Date()), 370, customerInformationTop1)
    .font("Helvetica")
    .text("LUGAR ORIGEN:", 50, customerInformationTop1 + 15)
    .font("Helvetica")
    .text(invoice.shipping.f, 140, customerInformationTop1 + 15)
    .font("Helvetica")
    .text("OCUPACIÓN:", 330, customerInformationTop1 + 15)
    .font("Helvetica")
    .text(invoice.shipping.g, 400, customerInformationTop1 + 15)

    .font("Helvetica")
    .text("EDAD:", 50, customerInformationTop1 + 30)
    .font("Helvetica")
    .text(invoice.shipping.b, 90, customerInformationTop1 + 30)

    .font("Helvetica")
    .text("SEXO:", 120, customerInformationTop1 + 30)
    .font("Helvetica")
    .text(invoice.shipping.c, 160, customerInformationTop1 + 30)
    .font("Helvetica")
    .text("EDO. CIVIL:", 220, customerInformationTop1 + 30)
    .font("Helvetica")
    .text(invoice.shipping.d, 280, customerInformationTop1 + 30)
    .font("Helvetica")
    .text("TELÉFONO:", 380, customerInformationTop1 + 30)
    .font("Helvetica")
    .text(invoice.shipping.i, 450, customerInformationTop1 + 30)

    .font("Helvetica")
    .text("DOMICILIO:", 50, customerInformationTop1 + 45)
    .font("Helvetica")
    .text(invoice.shipping.h, 110, customerInformationTop1 + 45)
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("ANTECEDENTES HEREDOFAMILIARES", 50, 245, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("MADRE CON:", 50, customerInformationTop1 + 90)
    .font("Helvetica")
    .text(invoice.shipping.j, 115, customerInformationTop1 + 90)
    .font("Helvetica")
    .text("FALLECIDO:", 150, customerInformationTop1 + 90)
    .font("Helvetica")
    .text(invoice.shipping.k, 210, customerInformationTop1 + 90)
    .font("Helvetica")
    .text("CAUSA:", 230, customerInformationTop1 + 90)
    .font("Helvetica")
    .text(invoice.shipping.l, 270, customerInformationTop1 + 90)

    .font("Helvetica")
    .text("PADRE CON:", 50, customerInformationTop1 + 105)
    .font("Helvetica")
    .text(invoice.shipping.o, 115, customerInformationTop1 + 105)
    .font("Helvetica")
    .text("FALLECIDO:", 150, customerInformationTop1 + 105)
    .font("Helvetica")
    .text(invoice.shipping.p, 210, customerInformationTop1 + 105)
    .font("Helvetica")
    .text("CAUSA:", 230, customerInformationTop1 + 105)
    .font("Helvetica")
    .text(invoice.shipping.q, 270, customerInformationTop1 + 105)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("ANTECEDENTES PERSONALES NO PATOLÓGICOS", 50, 310, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("ALERGIAS:", 50, customerInformationTop1 + 150)
    .font("Helvetica")

    .text("MEDICAMENTOS:", 130, customerInformationTop1 + 150)
    .font("Helvetica")
    .text(invoice.shipping.s, 220, customerInformationTop1 + 150)

    .font("Helvetica")
    .text("ALIMENTOS:", 130, customerInformationTop1 + 165)
    .font("Helvetica")
    .text(invoice.shipping.t, 195, customerInformationTop1 + 165)

    .font("Helvetica")
    .text("SUSTANCIAS QUIMICAS:", 130, customerInformationTop1 + 180)
    .font("Helvetica")
    .text(invoice.shipping.y, 255, customerInformationTop1 + 180)

    .font("Helvetica")
    .text("CIRUGÍAS PREVIAS:", 50, customerInformationTop1 + 195)
    .font("Helvetica")
    .text(invoice.shipping.x, 150, customerInformationTop1 + 195)

    .font("Helvetica")
    .text("TRANSFUSIONES:", 50, customerInformationTop1 + 210)
    .font("Helvetica")
    .text(invoice.shipping.w, 140, customerInformationTop1 + 210)
    .text("FRACTURAS ACTUALES Y/O PREVIAS:", 50, customerInformationTop1 + 225)
    .font("Helvetica")
    .text(invoice.shipping.aa, 235, customerInformationTop1 + 225)

    .font("Helvetica")
    .text("TOXICOMANIAS:", 50, customerInformationTop1 + 240)
    .font("Helvetica")
    .text("ALCOHOLISMO:", 150, customerInformationTop1 + 240)
    .font("Helvetica")
    .text(invoice.shipping.bb, 230, customerInformationTop1 + 240)
    .font("Helvetica")
    .text("TABAQUISMO:", 250, customerInformationTop1 + 240)
    .font("Helvetica")
    .text(invoice.shipping.cc, 330, customerInformationTop1 + 240)
    .font("Helvetica")
    .text("DROGAS:", 350, customerInformationTop1 + 240)
    .font("Helvetica")
    .text(invoice.shipping.dd, 405, customerInformationTop1 + 240)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("ANTECEDENTES PERSONALES NO PATOLÓGICOS", 50, 440, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("DM:", 50, customerInformationTop1 + 280)
    .font("Helvetica")
    .text(invoice.shipping.ff, 80, customerInformationTop1 + 280)
    .font("Helvetica")
    .text("TIEMPO DE EVOLUCIÓN:", 120, customerInformationTop1 + 280)
    .font("Helvetica")
    .text(invoice.shipping.gg, 245, customerInformationTop1 + 280)

    .font("Helvetica")
    .text("HAS:", 50, customerInformationTop1 + 295)
    .font("Helvetica")
    .text(invoice.shipping.hh, 80, customerInformationTop1 + 295)
    .font("Helvetica")
    .text("TIEMPO DE EVOLUCIÓN:", 120, customerInformationTop1 + 295)
    .font("Helvetica")
    .text(invoice.shipping.jj, 245, customerInformationTop1 + 295)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("EXPLORACIÓN FÍSICA", 50, 500, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("SIGNOS VITALES:", 50, customerInformationTop1 + 340)
    .font("Helvetica")
    .text("T/A:", 150, customerInformationTop + 340)
    .font("Helvetica")
    .text(invoice.shipping.nn, 175, customerInformationTop + 340)
    .font("Helvetica")
    .text("FC:", 200, customerInformationTop1 + 340)
    .font("Helvetica")
    .text(invoice.shipping.oo, 220, customerInformationTop1 + 340)
    .font("Helvetica")
    .text("FR:", 250, customerInformationTop1 + 340)
    .font("Helvetica")
    .text(invoice.shipping.qq, 270, customerInformationTop1 + 340)

    .font("Helvetica")
    .text("TEMP:", 300, customerInformationTop1 + 340)
    .font("Helvetica")
    .text(invoice.shipping.rr, 340, customerInformationTop1 + 340)
    .font("Helvetica")
    .text("PESO:", 400, customerInformationTop1 + 340)
    .font("Helvetica")
    .text(invoice.shipping.ss, 440, customerInformationTop1 + 340)
    .font("Helvetica")
    .text("CABEZA:", 50, customerInformationTop1 + 355)
    .font("Helvetica")
    .text(invoice.shipping.tt, 100, customerInformationTop1 + 355)
    .font("Helvetica")
    .text("CUELLO:", 50, customerInformationTop1 + 370)
    .font("Helvetica")
    .text(invoice.shipping.xx, 100, customerInformationTop1 + 370)
    .font("Helvetica")
    .text("ABDOMEN:", 50, customerInformationTop1 + 385)
    .font("Helvetica")
    .text(invoice.shipping.zz, 110, customerInformationTop1 + 385)
    .font("Helvetica")
    .text("MIEMBROS PÉLVICOS:", 50, customerInformationTop1 + 400)
    .font("Helvetica")
    .text(invoice.shipping.yy, 160, customerInformationTop1 + 400)
    .font("Helvetica")
    .text("MIEMBROS TORÁCICOS:", 50, customerInformationTop1 + 415)
    .font("Helvetica")
    .text(invoice.shipping.ww, 170, customerInformationTop1 + 415)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("ANTECEDENTES GINECOBSTÉTRICOS", 50, 610, { align: "left" })
    .fontSize(10)

    .font("Helvetica")
    .text("MENARCA:", 50, customerInformationTop1 + 450)
    .font("Helvetica")
    .text(invoice.shipping.aaa, 110, customerInformationTop1 + 450)
    .font("Helvetica")
    .text("CESÁREAS:", 280, customerInformationTop1 + 450)
    .font("Helvetica")
    .text(invoice.shipping.bbb, 340, customerInformationTop1 + 450)

    .font("Helvetica")
    .text("IVSA:", 50, customerInformationTop1 + 465)
    .font("Helvetica")
    .text(invoice.shipping.ccc, 80, customerInformationTop1 + 465)
    .font("Helvetica")
    .text("ABORTO:", 280, customerInformationTop1 + 465)
    .font("Helvetica")
    .text(invoice.shipping.ddd, 330, customerInformationTop1 + 465)

    .font("Helvetica")
    .text("GESTA:", 50, customerInformationTop1 + 480)
    .font("Helvetica")
    .text(invoice.shipping.eee, 90, customerInformationTop1 + 480)
    .font("Helvetica")
    .text("PARAS:", 280, customerInformationTop1 + 480)
    .font("Helvetica")
    .text(invoice.shipping.fff, 320, customerInformationTop1 + 480)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("RESULTADOS DE LABORATORIO", 50, 675, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("BH:", 50, customerInformationTop + 495)
    .font("Helvetica")
    .text("HEMEGLOBINA:", 90, customerInformationTop + 495)
    .font("Helvetica")
    .text(invoice.shipping.hhh, 175, customerInformationTop + 495)
    .font("Helvetica")
    .text("HEMATOCRITO:", 90, customerInformationTop + 510)
    .font("Helvetica")
    .text(invoice.shipping.ggg, 175, customerInformationTop + 510)
    .font("Helvetica")
    .text("PLAQUETAS:", 90, customerInformationTop + 525)
    .font("Helvetica")
    .text(invoice.shipping.jjj, 175, customerInformationTop + 525)
    .text("QS:", 50, customerInformationTop + 540)
    .text("GLUCOSA:", 90, customerInformationTop + 540)
    .font("Helvetica")
    .text(invoice.shipping.iii, 175, customerInformationTop + 540)
    .text("UREA:", 90, customerInformationTop + 555)
    .font("Helvetica")
    .text(invoice.shipping.mmm, 175, customerInformationTop + 555)
    .text("CREATININA:", 90, customerInformationTop + 570)
    .font("Helvetica")
    .text(invoice.shipping.nnn, 175, customerInformationTop + 570)

    .moveDown();


}
function generateCustomerInformation1(doc, invoice) {
  doc

    .font('Helvetica', 12)
  doc
    .image("fondo.png", 40, 30, { width: 100 })
    .fontSize(20)

    .fontSize(10)
    .text("", 100, 50, { align: "right" })
    .fontSize(15)
    .text("CLINICA ALMENDROS", 140, 65, { align: "left" })
    .fontSize(9)
    .text("UNIDAD MÉDICO QUIRURGÍCA", 140, 80, { align: "left" })
   
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("RESULTADOS DE LABORATORIO", 50, 120, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("RX:", 50,150)
    .text(invoice.shipping.ooo, 70,150)
    .text("USG:", 50,165)
    .text(invoice.shipping.ppp, 80,165)

    .fontSize(12)
    .font("Helvetica-Bold")
    .text("TRATAMIENTO ACTUAL", 50, 200, { align: "left" })
    .fontSize(10)
    .font("Helvetica")
    .text("MÉDICO:", 50,230)
    .text(invoice.shipping.qqq, 95,230)
    .text("QUIRÚRGICO:", 50,245)
    .text(invoice.shipping.rrr, 120,245)
    
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("NOTA POST-QUIRURGICA", 50, 270, { align: "left" })
    .fontSize(11)
    .font("Helvetica")
    .text("CIRUGIA PROGRAMADA:", 50,285)
    .text(invoice.shipping.az, 185,285,{align:'justify'})
    .text("CIRUGIA REALIZADA:", 50,300)
    .text(invoice.shipping.bz, 165,300,{align:'justify'})
    .text("HALLAZGOS:", 50,315)
    .text(invoice.shipping.cz, 125,315,{align:'justify'})
    .text("COMPLICACIONES:", 50,330)
    .text(invoice.shipping.dz, 155,330,{align:'justify'})
    .text("AYUDANTE:", 50,345)
    .text(invoice.shipping.ez, 115,345,{align:'justify'})
    .text("INSTRUMENTISTA:", 50,360)
    .text(invoice.shipping.fz, 150,360,{align:'justify'})
    .text("ANESTESIÓLOGO:", 50,375)
    .text(invoice.shipping.hz, 155,375,{align:'justify'})
    .text("CIRCULANTE:", 50,390)
    .text(invoice.shipping.jz , 130,390,{align:'justify'})
    .font("Helvetica-Bold")
    .text("NOTA DE EVALUACIÓN POSTOPERATORIA:", 50, 410, { align: "justify" })
    .font("Helvetica")
    .text(invoice.shipping.iz , 50,420,{align:'justify'})
    .font("Helvetica-Bold")
    .text("NOTA DE ALTA DEL SERVICIO:", 50,500)
    .font("Helvetica")
    .text(invoice.shipping.kz , 50,515,{align:'justify'})
    .font("Helvetica-Bold")
    .text("DIAGNOÓSTICO:", 50,585)
    .font("Helvetica")
    .text(invoice.shipping.sss , 50,600,{align:'justify'})
    .text("ELABORÓ: ULISES PÉREZ MONTESINOS", 50,700)
    .text("FIRMA:", 350,700)
    /*.fontSize(10)
    .font("Helvetica-Bold")
    .text("NOTA DE EVALUACIÓN POSTOPERATORIA:", 50, 420, { align: "justify" })
    .fontSize('Helvetica',10)
    .text(invoice.shipping.iz, 50,430,{align:'justify'})
    .fontSize(10)
    .font("Helvetica-Bold")
    .text("NOTA DE ALTA DEL SERVICIO:", 50, 500, { align: "justify" })
    .fontSize('Helvetica',10)
    .text(invoice.shipping.kz, 50,515,{align:'justify'})
    .fontSize(10)
    .text("DIAGNÓSTICO:", 50,710)
    .fontSize('Helvetica',10)
    .text(invoice.shipping.sss, 120,710,{align:'justify'})
    .text("ELABORÓ: ULISES PÉREZ MONTESINOS", 50,750)
    .text("FIRMA:", 350,770)*/
    
    .moveDown()
}
function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "",
      50,
      780,
      { align: "center", width: 500 }
    );
}
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
