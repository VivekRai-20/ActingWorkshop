import { NextRequest, NextResponse } from 'next/server';
import { createInvoice } from '@/lib/invoice';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  try {
    const { paymentId } = await params;

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID is required' },
        { status: 400 }
      );
    }

    console.log('Attempting to retrieve invoice for payment ID:', paymentId);
    const invoicePath = path.join(process.cwd(), 'public', 'invoices', `invoice-${paymentId}.pdf`);
    
    // Check if invoice exists
    if (!fs.existsSync(invoicePath)) {
      console.log('Invoice not found, generating new one for payment ID:', paymentId);
      
      // Generate invoice with default data
      try {
        const generatedInvoicePath = await createInvoice({
          paymentId,
          customerName: 'Workshop Participant',
          customerEmail: 'customer@example.com',
          customerPhone: 'N/A',
          amount: 199900, // ₹1999
          date: new Date().toISOString().split('T')[0],
          workshopName: 'Character Decode Camp - 3-Day Acting Workshop'
        });
        
        console.log('Invoice generated successfully at:', generatedInvoicePath);
      } catch (genErr) {
        console.error('Error generating invoice:', genErr);
        return NextResponse.json(
          { error: 'Invoice not found and could not be generated' },
          { status: 404 }
        );
      }
    }

    // Read and serve the PDF file
    const fileBuffer = fs.readFileSync(invoicePath);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=invoice-${paymentId}.pdf`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
    
  } catch (error) {
    console.error('Error retrieving invoice:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve invoice' },
      { status: 500 }
    );
  }
}