import Link from 'next/link';
import { doctors, specializations } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookingForm } from '@/components/doctor/BookingForm';

export default function BookingPage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id);
  if (!doctor) {
    notFound();
  }

  const specialization = specializations.find(s => s.slug === doctor.specialization);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href={`/doctor/${doctor.id}`} className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl">Book an Appointment</CardTitle>
            <CardDescription className="text-base pt-1">
              You are booking an appointment with:
            </CardDescription>
            <div className="flex items-center gap-3 pt-2">
                <User className="h-8 w-8 text-primary" />
                <div>
                    <p className="font-bold text-lg text-foreground">{doctor.name}</p>
                    <p className="text-muted-foreground">{specialization?.name}</p>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
