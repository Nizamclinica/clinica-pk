"use server";

import { summarizeDoctorReviews } from "@/ai/flows/summarize-doctor-reviews";
import { sendBookingEmail } from "@/ai/flows/sendBookingEmail";
import { z } from "zod";
import { format } from "date-fns";

const SummarizeSchema = z.object({
  doctorName: z.string(),
  reviews: z.string().min(50, "Please provide more review text for a better summary."),
});

export interface FormState {
  summary?: string;
  error?: string;
}

export async function handleSummary(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = SummarizeSchema.safeParse({
      doctorName: formData.get("doctorName"),
      reviews: formData.get("reviews"),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors.reviews?.[0] || 'Invalid input.'
      };
    }
    
    const result = await summarizeDoctorReviews(validatedFields.data);
    
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again." };
  }
}

const bookingFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    mobile: z.string().min(10, "Please enter a valid mobile number."),
    date: z.date(),
    time: z.string(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export async function handleBooking(
  data: BookingFormValues
): Promise<{ success: boolean; error?: string }> {
    const validatedFields = bookingFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, error: "Invalid form data." };
    }

    const { name, email, date, time } = validatedFields.data;
    const adminEmail = 'nizam9671@gmail.com';

    const formattedDate = format(date, "PPP");

    // Send confirmation to customer
    try {
        await sendBookingEmail({
            to: email,
            subject: 'Your Appointment Confirmation at clinica.pk',
            body: `Dear ${name},\n\nThis is a confirmation that your appointment is scheduled for ${formattedDate} at ${time}.\n\nThank you for choosing clinica.pk.\n\nBest regards,\nThe clinica.pk Team`,
        });
    } catch(e) {
        console.error("Failed to send customer email", e);
        // In a real app, you might want to handle this more gracefully
    }
    
    // Send notification to admin
    try {
        await sendBookingEmail({
            to: adminEmail,
            subject: 'New Appointment Booking',
            body: `A new appointment has been booked.\n\nPatient: ${name}\nEmail: ${email}\nDate: ${formattedDate}\nTime: ${time}`,
        });
    } catch(e) {
        console.error("Failed to send admin email", e);
    }

    return { success: true };
}
