import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

interface InvoiceData {
  paymentId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  amount: number;
  date: string;
  workshopName: string;
}

/**
 * Creates an invoice PDF file
 * @param invoice - The invoice data
 * @returns Promise<string> - Path to the generated PDF file
 */
export async function createInvoice(invoice: InvoiceData): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const invoiceDir = path.join(process.cwd(), 'public', 'invoices');
      
      // Create invoices directory if it doesn't exist
      if (!fs.existsSync(invoiceDir)) {
        fs.mkdirSync(invoiceDir, { recursive: true });
      }
      
      const invoicePath = path.join(invoiceDir, `invoice-${invoice.paymentId}.pdf`);
      const doc = new PDFDocument({ margin: 50 });
      
      // Pipe the PDF to a file
      const stream = fs.createWriteStream(invoicePath);
      doc.pipe(stream);
      
      // Add content to the PDF
      generateHeader(doc);
      generateCustomerInformation(doc, invoice);
      generateInvoiceTable(doc, invoice);
      generateFooter(doc);
      
      // Finalize the PDF and end the stream
      doc.end();
      
      stream.on('finish', () => {
        resolve(invoicePath);
      });
      
      stream.on('error', (err) => {
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Generate the header section of the invoice
 */
function generateHeader(doc: PDFKit.PDFDocument) {
  doc
    .fillColor('#444444')
    .fontSize(20)
    .text('Character Decode Camp', 50, 45)
    .fontSize(10)
    .text('Character Decode Camp', 200, 50, { align: 'right' })
    .text('123 Acting Street', 200, 65, { align: 'right' })
    .text('Mumbai, Maharashtra, 400001', 200, 80, { align: 'right' })
    .moveDown();
}

/**
 * Generate the customer information section of the invoice
 */
function generateCustomerInformation(doc: PDFKit.PDFDocument, invoice: InvoiceData) {
  doc
    .fillColor('#444444')
    .fontSize(20)
    .text('Invoice', 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text('Invoice Number:', 50, customerInformationTop)
    .font('Helvetica-Bold')
    .text(invoice.paymentId, 150, customerInformationTop)
    .font('Helvetica')
    .text('Invoice Date:', 50, customerInformationTop + 15)
    .text(formatDate(invoice.date), 150, customerInformationTop + 15)
    .text('Amount Paid:', 50, customerInformationTop + 30)
    .text(
      formatCurrency(invoice.amount / 100),
      150,
      customerInformationTop + 30
    )

    .font('Helvetica-Bold')
    .text(invoice.customerName, 300, customerInformationTop)
    .font('Helvetica')
    .text(invoice.customerEmail, 300, customerInformationTop + 15)
    .text(invoice.customerPhone, 300, customerInformationTop + 30)
    .moveDown();

  generateHr(doc, 252);
}

/**
 * Generate the invoice table
 */
function generateInvoiceTable(doc: PDFKit.PDFDocument, invoice: InvoiceData) {
  const invoiceTableTop = 330;

  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    invoiceTableTop,
    'Item',
    'Description',
    'Unit Cost',
    'Quantity',
    'Total'
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  const position = invoiceTableTop + 30;
  generateTableRow(
    doc,
    position,
    '3-Day Acting Workshop',
    invoice.workshopName,
    formatCurrency(invoice.amount / 100),
    '1',
    formatCurrency(invoice.amount / 100)
  );

  generateHr(doc, position + 20);

  const subtotalPosition = position + 40;
  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    subtotalPosition,
    '',
    '',
    'Subtotal',
    '',
    formatCurrency(invoice.amount / 100)
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    '',
    '',
    'Paid To Date',
    '',
    formatCurrency(invoice.amount / 100)
  );

  const duePosition = paidToDatePosition + 25;
  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    duePosition,
    '',
    '',
    'Balance Due',
    '',
    formatCurrency(0)
  );
  doc.font('Helvetica');
}

/**
 * Generate a table row
 */
function generateTableRow(
  doc: PDFKit.PDFDocument,
  y: number,
  item: string,
  description: string,
  unitCost: string,
  quantity: string,
  lineTotal: string
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: 'right' })
    .text(quantity, 370, y, { width: 90, align: 'right' })
    .text(lineTotal, 0, y, { align: 'right' });
}

/**
 * Generate a horizontal line
 */
function generateHr(doc: PDFKit.PDFDocument, y: number) {
  doc
    .strokeColor('#aaaaaa')
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

/**
 * Generate the footer section of the invoice
 */
function generateFooter(doc: PDFKit.PDFDocument) {
  doc
    .fontSize(10)
    .text(
      'Payment received with thanks. We look forward to seeing you at the workshop!',
      50,
      700,
      { align: 'center', width: 500 }
    );
}

/**
 * Format a date
 */
function formatDate(date: string): string {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * Format a currency
 */
function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(2)}`;
}