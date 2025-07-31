'use server';
/**
 * @fileOverview Summarizes doctor reviews from the web to provide a quick assessment of the doctor's reputation.
 *
 * - summarizeDoctorReviews - A function that handles the summarization of doctor reviews.
 * - SummarizeDoctorReviewsInput - The input type for the summarizeDoctorReviews function.
 * - SummarizeDoctorReviewsOutput - The return type for the summarizeDoctorReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDoctorReviewsInputSchema = z.object({
  doctorName: z.string().describe('The name of the doctor to summarize reviews for.'),
  reviews: z.string().describe('The reviews of the doctor aggregated from the web.'),
});
export type SummarizeDoctorReviewsInput = z.infer<typeof SummarizeDoctorReviewsInputSchema>;

const SummarizeDoctorReviewsOutputSchema = z.object({
  summary: z.string().describe('A bulleted list summarizing the key aspects of the doctor reviews.'),
});
export type SummarizeDoctorReviewsOutput = z.infer<typeof SummarizeDoctorReviewsOutputSchema>;

export async function summarizeDoctorReviews(input: SummarizeDoctorReviewsInput): Promise<SummarizeDoctorReviewsOutput> {
  return summarizeDoctorReviewsFlow(input);
}

const summarizeDoctorReviewsPrompt = ai.definePrompt({
  name: 'summarizeDoctorReviewsPrompt',
  input: {schema: SummarizeDoctorReviewsInputSchema},
  output: {schema: SummarizeDoctorReviewsOutputSchema},
  prompt: `You are an expert summarizer of doctor reviews.

You will be provided with a collection of reviews for a doctor. Your task is to summarize these reviews into a concise, bulleted list highlighting the key aspects of the doctor's service and reputation.

Doctor Name: {{{doctorName}}}
Reviews: {{{reviews}}}

Summary:`,
});

const summarizeDoctorReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeDoctorReviewsFlow',
    inputSchema: SummarizeDoctorReviewsInputSchema,
    outputSchema: SummarizeDoctorReviewsOutputSchema,
  },
  async input => {
    const {output} = await summarizeDoctorReviewsPrompt(input);
    return output!;
  }
);
