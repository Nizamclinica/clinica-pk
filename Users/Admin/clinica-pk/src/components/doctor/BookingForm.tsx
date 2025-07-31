"use client";

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { handleBooking } from '@/lib/actions';

const bookingFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    mobile: z.string().min(10, "Please enter a valid mobile number."),
    date: z.date({ required_error: "Please select a date." }),
    time: z.string({ required_error: "Please select a time." }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

function generateTimeSlots() {
    const slots = [];
    for (let i = 0; i < 24; i++) {
        const hour = i.toString().padStart(2, '0');
        slots.push(`${hour}:00`);
    }
    return slots;
}

export function BookingForm() {
    const [isBooked, setIsBooked] = useState(false);
    const [bookingDetails, setBookingDetails] = useState<BookingFormValues | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
        }
    });

    const selectedDate = form.watch('date');

    const onSubmit = async (data: BookingFormValues) => {
        setIsLoading(true);
        try {
            const result = await handleBooking(data);
            if (result.success) {
                setBookingDetails(data);
                setIsBooked(true);
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Booking Failed',
                    description: result.error || 'An unexpected error occurred.',
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Booking Failed',
                description: 'An unexpected error occurred. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const availableSlots = generateTimeSlots();

    if (isBooked && bookingDetails) {
        return (
            <Alert className="border-green-500 bg-green-50 text-green-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle className="font-headline text-lg">Appointment Confirmed!</AlertTitle>
                <AlertDescription>
                    Your appointment is scheduled for {format(bookingDetails.date, "PPP")} at {bookingDetails.time}. A confirmation email has been sent to {bookingDetails.email}.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <h3 className="font-headline text-xl font-semibold mb-4">1. Your Information</h3>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1 234 567 890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="font-headline text-xl font-semibold mb-4">2. Select a Date</h3>
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={'outline'}
                                                className={cn(
                                                    'w-[280px] justify-start text-left font-normal text-base py-6',
                                                    !field.value && 'text-muted-foreground'
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={(date) => {
                                                if(date) field.onChange(date);
                                                form.setValue('time', ''); // Reset time when date changes
                                            }}
                                            disabled={(d) => d < today}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {selectedDate && (
                    <div>
                        <h3 className="font-headline text-xl font-semibold mb-4">3. Select a Time</h3>
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                                        >
                                            {availableSlots.map((time) => (
                                                <FormItem key={time}>
                                                    <FormControl>
                                                        <RadioGroupItem value={time} id={time} className="sr-only" />
                                                    </FormControl>
                                                    <Label
                                                        htmlFor={time}
                                                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 text-base hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                                                    >
                                                        {time}
                                                    </Label>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <>
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                           Booking...
                        </>
                    ) : (
                       "Confirm Booking"
                    )}
                </Button>
            </form>
        </Form>
    );
}
