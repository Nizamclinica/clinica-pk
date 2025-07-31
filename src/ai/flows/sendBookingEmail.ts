'use server';
/**
 * @fileOverview A flow to send booking confirmation emails.
 *
 * - sendBookingEmail - A function that handles sending emails.
 * - SendEmailInput - The input type for the sendBookingEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;
const SendEmailInputSchema = z.object({
  to: z.string().describe("The recipient's email address."),
  subject: z.string().describe('The subject of the email.'),
  body: z.string().describe('The plain text body of the email.'),
});

export async function sendBookingEmail(input: SendEmailInput): Promise<void> {
  return sendBookingEmailFlow(input);
}

const sendBookingEmailFlow = ai.defineFlow(
  {
    name: 'sendBookingEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // In a real-world application, you would integrate with an email service
    // like Resend, SendGrid, or Nodemailer here.
    // For this example, we'll just log the email content to the console.
    console.log('--- Sending Email ---');
    console.log(`To: ${input.to}`);
    console.log(`Subject: ${input.subject}`);
    console.log(`Body: \n${input.body}`);
    console.log('---------------------');
    
    // Simulate a short delay for sending the email.
    await new Promise(resolve => setTimeout(resolve, 500));
  }
);
