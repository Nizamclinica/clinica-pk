import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-doctor-reviews.ts';
import '@/ai/flows/sendBookingEmail.ts';
