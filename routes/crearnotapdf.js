const PDFDocument = require("pdfkit");
const fs = require("fs");
//const blobStream = require('blob-stream');
function createInvoice(invoice,path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
 // const stream = doc.pipe(blobStream());
  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceDescripcion(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
  /*stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });*/

}

function generateHeader(doc) {
  doc
    .image("fondo.png", 50, 45, { width: 100 })
    .fontSize(20)

    .fontSize(10)
    .text("", 200, 50, { align: "right" })
    .text("", 200, 65, { align: "right" })
    .fontSize(25)
    .text("CLINICA ALMENDROS", 200, 80, { align: "left" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc

    .fontSize(20)
    .text("NOTA MEDICA", 50, 160, { align: "center" });


  const customerInformationTop = 200;

  doc
    .fontSize(12)
    .font("Helvetica")
    .text("PACIENTE:", 50, customerInformationTop)
    .font("Helvetica")
    .text(invoice.shipping.name, 115, customerInformationTop)
    .font("Helvetica")
    .text("MÉDICO:", 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.shipping.medico, 355, customerInformationTop)
    .font("Helvetica")
    .text("EDAD:", 50, customerInformationTop + 15)
    .font("Helvetica")
    .text(invoice.shipping.edad, 90, customerInformationTop + 15)
    .font("Helvetica")
    .text("FECHA:", 300, customerInformationTop + 15)
    .font("Helvetica")
    .text(formatDate(new Date()), 350, customerInformationTop + 15)



    .moveDown();

}

function generateInvoiceDescripcion(doc, invoice) {
  doc

    .fontSize(20)
    .font("Helvetica-Bold")
    .text("DESCRIPCIÓN", 50, 260, { align: "center" });



  const customerInformationTop = 300;

  doc
    .fontSize(12)
    .font("Helvetica")
    .text(invoice.shipping.espacio, 50, customerInformationTop, { align: 'justify' })
    .moveDown();

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


function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createInvoice
};
